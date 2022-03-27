const faker = require('faker');
const bcrypt = require('bcrypt');

const db = require('../config/connection');
const { Review, User } = require('../models');

const SALT_ROUNDS = 10;

db.once('open', async () => {
  await Review.deleteMany({});
  await User.deleteMany({});

  // create user data
  const createdUsers = [];

  const password = await bcrypt.hash('password123', SALT_ROUNDS);

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);

     createdUsers.push({ username, email, password });

    const user = await User.create({ username, email, password });
    createdUsers.push(user);
  }


  //const createdUsers = await User.collection.insertMany(userData);
  /* create friends
  for (let i = 0; i < 100; i += 1) {
    const randomUserIndex = Math.floor(Math.random() * createdUsers.insertedCount);
    const { _id: userId } = createdUsers.insertedIds[randomUserIndex];

    let friendId = userId;

    while (friendId === userId) {
      const randomUserIndex = Math.floor(Math.random() * createdUsers.insertedCount);
      friendId = createdUsers.insertedIds[randomUserIndex];
    }

    await User.updateOne({ _id: userId }, { $addToSet: { friends: friendId } });
  }*/

  // create reviews
  let createdReviews = [];
  for (let i = 0; i < 100; i += 1) {
    const reviewText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.length);
    const { _id, username } = createdUsers[randomUserIndex];

    const review = await Review.create({ reviewText });

    const updatedUser = await User.updateOne(
      { _id: _id },
      { $push: { reviews: review._id } }
    );
    createdReviews.push(review);
  }

  // create reactions
/*  for (let i = 0; i < 100; i += 1) {
    const reactionBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.length);
    const { username } = createdUsers[randomUserIndex];

    const randomReviewIndex = Math.floor(Math.random() * createdReviews.length);
    const { _id: reviewId } = createdReviews[randomReviewIndex];

    await Review.updateOne(
      { _id: reviewId },
      { $push: { reactions: { reactionBody, username } } },
      { runValidators: true }
    );
  }*/

  console.log('all done!');
  process.exit(0);
});
