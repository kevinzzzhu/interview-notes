import React from 'react';

const App = () => {
  return (
    <main>
      <div className="container mt-4 col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
        <h1>You have any questions?<br/>Contact us 👋</h1>
        <form>
          <div className="form-group">
            <label htmlFor="nameInput">Your name*</label>
            <input type="text" className="form-control" id="nameInput" placeholder="Tony Stark" />
          </div>

          <div className="form-group">
            <label htmlFor="emailInput">Your email*</label>
            <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="example@gmail.com" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else!</small>
          </div>

          <div className="form-group">
            <label htmlFor="reasonInput">How can we help you?*</label>
            <select className="form-control" id="reasonInput" defaultValue="">
              <option value="" disabled>Select the reason you're contacting us</option>
              <option value="1">Product question</option>
              <option value="2">Product feedback</option>
              <option value="3">Billing and plans</option>
              <option value="4">Something else</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="messageTextarea">Message*</label>
            <textarea className="form-control" id="messageTextarea" rows="5" placeholder="Please tell us how we can help you"></textarea>
          </div>

          <span>Form completion:</span>
          <div className="progress mt-2">
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '70%'}}></div>
          </div>
        </form>
      </div>
    </main>
  )
};

export default App;