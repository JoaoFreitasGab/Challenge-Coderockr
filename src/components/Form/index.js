import React from 'react'
import './Form.css'
import {RiSendPlane2Fill} from 'react-icons/ri'

const Form = () => {
    return (
        <div>
              
               <form className="form">
               <h1 className="h1">Contact</h1>
               <h3 className="h3">Name:</h3>
               <label>
               <input className="form-input" type="text" name="name" placeholder="Fill your Full Name"/>
               </label>
               <h3 className="h3">E-Mail:</h3>
               <label>
               <input  className="form-input" type="mail" name="mail" placeholder="Fill a valid e-mail"/>
               </label>
               <h3 className="h3">Phone:</h3>
               <label>
               <input className="form-input" type="number" name="phone"  placeholder="Fill your phone"/>
               </label>
               <h3 className="h3">Post:</h3>
               <label>
               <textarea className="form-text" rows="5" placeholder="Hello..."></textarea>
               </label>
               </form>
               <button className="form-btn"><RiSendPlane2Fill/>  Submit</button>
                                     
        </div>
    )
}

export default Form
