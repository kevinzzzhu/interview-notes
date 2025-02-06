import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [progress, setProgress] = useState("0");

  const [validFields, setValidFields] = useState({
    name : false, 
    email: false, 
    reason: false, 
    message: false
  })

  const handleVaildStates = (e) => {
    if (e == "name" && name){
      return 0
    }
  }

  // When The user inputs a name that is less than 2 or more than 100 characters
  //  Then The progress bar should not increase
  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    // if name between 2 and 100 characters
    if (value.length > 1 && value.length < 101){
      console.log(validFields)
      // process string to int
      const num = parseInt(progress) + handleVaildStates("name");
      setProgress(num.toString());
    }
  }
  
  // When The user inputs an email that does not match the regex "/^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,3}$/"
  //  Then The progress bar should not increase
  // const handleEmailChange

  // When The user does not select a contact reason from the dropdown
    // Then The progress bar should not increase
  // const handleReasonChange

  //    When The user inputs a message that is less than 20 or more than 4096 characters
  //  Then The progress bar should not increase
  // const handleMessage

  // when all field are valid and complete, progress bar 100%
  

  return (
    <main>
      <div className="container mt-4 col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
        <h1>You have any questions?<br/>Contact us 👋</h1>
        <form>
          <div className="form-group">
            <label htmlFor="nameInput">Your name*</label>
            <input type="text" className="form-control" id="nameInput" value={name} onChange={handleNameChange} />
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
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100" style={{width: `${progress}%`}}></div>
          </div>
        </form>
      </div>
    </main>
  )
};

export default App;