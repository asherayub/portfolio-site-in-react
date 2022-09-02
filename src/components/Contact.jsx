import React from 'react'
import styled from 'styled-components';
function Contact() {
  return (
    <ContactMe>
        <h1>Contact Me</h1>
        <form action="">
            <label htmlFor="email">Enter Email</label>
            <input type="mail" id='email'/>
            <label htmlFor="name">Enter Name</label>
            <input type="text" id='name'/>
            <label htmlFor="mess">Message</label>
            <textarea name="message" id="mess" cols="40" rows="5"></textarea>
        </form>
    </ContactMe>
  )
}

export default Contact

const ContactMe = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  
  h1{
    font-size: 3rem;
    color: #00ffbb;
  }
  form{
    display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  caret-color: #00ffbb;
  text-align: center;
  @media (max-width: 520px){
    width: 90vw;
  }

  *{
    margin: 10px 0;
    padding: 10px;
  }
  label{
    font-size: 1.2rem;
    cursor: pointer;
  }
  input{
    font-size: 1.2rem;
    background-color: transparent;
    border:none;
    border-bottom: 1px solid #00ffbb55;
    outline: none;
  }
  textarea{
    resize: none;
    background-color: transparent;
    border: 1px solid #00ffbb55;
    border-radius: 10px;
    font-size: 1.2rem;
    outline: none;
    @media (max-width: 520px){
        width: 80vw;
    }
  }
  }
`;