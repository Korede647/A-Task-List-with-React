import React, { useEffect, useState } from 'react'
import "../../components/Signup/sign.css"
import { Link } from 'react-router-dom';
import axios from 'axios';
import { LOGIN_URL } from '../Api_url';

const FormLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const handleSubmit = async (event) => {
        event.preventDefault()

        try{
            const response = await axios.post(LOGIN_URL, {
                email,
                password
            })

            if(response.data.status === "success"){
                window.location.assign('/dashboard')
                console.log(response.data.token);

                localStorage.setItem("Token", (response.data.data.token))

               JSON.parse(localStorage.getItem("Token"))
            }else{
                console.log(response.data.data);
            }
        }catch(error){
            console.log(error.response.data.data);
        }
    }


  return (
    <>

    <div className="signcontainer" style={{
        
    }}>
        <div className="overlay">
            <form className='upform' onSubmit={handleSubmit}>
                <p>Log In</p>

                <div className="namediv">
                    <label htmlFor="email">Email:</label>
                    <input 
                    type="text"
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                     />
                </div>

                <div className="namediv">
                    <label htmlFor="password">Password: </label>
                    <input  
                    type="password" 
                    placeholder='Password' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button className='buttondiv' type='submit'>Login</button>

             <p>Not Signed up? <Link to="/" style={{
                    color: "gray"
                }}>Go to Sign up</Link></p>


            </form>
        </div>
        
    </div>
      
    </>
  )
}

export default FormLogin
