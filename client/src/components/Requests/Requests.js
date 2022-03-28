import React from 'react'

function Requests() {
  return (
    <div className="card">
    <header className="card-header">
        <p className="card-header-title has-text-link">
            4/1/2022 @ 1pm
        </p>
    </header>
    <div className="card-content">
        <div className="content">
            Sue Smith
            <br/>
            Partial clean
            <br/>
            123 Main St
        </div>
    </div>
    <footer className="card-footer">
        <a href="/nomatch" className="card-footer-item">Change</a>
        <a href="/nomatch" className="card-footer-item has-text-danger">Cancel</a>
    </footer>
</div>
  )
}

export default Requests