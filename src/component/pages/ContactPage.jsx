import React, {useState} from 'react'

export default function ContactPage() {

  const [firstName, setFirstName] = useState ("")
  const [lastName, setLastName] = useState ("")
  const [emailAdd, setEmailAdd] = useState ("")
  const [commentText, setCommentText] = useState ("")


  function handleSubmit () {
    console.log(firstName, lastName, emailAdd, commentText)
  }

  return (
    <>
      <div className="contactPage"> 
        <h1 className="mainTitle">Contact Form</h1>
          <div className="contactForm">
            <label>First Name:
                <input type="text" name="firstName" onChange={(event)=>setFirstName(event.target.value)}  ></input>
              </label>

              <label>Last Name:
                <input type="text" name="lastName" onChange={(event)=>setLastName(event.target.value)}  ></input>
              </label>

              <label>Email Address:
                <input type="text" name="emailAdd" onChange={(event)=>setEmailAdd(event.target.value)} ></input>
              </label>

              <label>Comments:
                <input type="text" name="tel" onChange={(event)=>setCommentText(event.target.value)} ></input>
              </label>

            <button onClick={handleSubmit} >SUBMIT</button>
          </div>
      </div>
    </>
  )
}
