import React, { useState } from 'react'
import "./sign.css"
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../Api_url';

const Formsignup = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault()

        try{
            const response = await axios.post(BASE_URL, {
                name,
                email,
                username
            })
            if(response.data.status === "success"){
                window.location.assign('/login')
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
                <p>Sign Up</p>
            <div className="namediv">
            <label htmlFor="name">Fullname: </label>
                    <input 
                    type="text" 
                    placeholder='Name' 
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    />
            </div>

                <div className="namediv">
                    <label htmlFor="fullname">Username: </label>
                    <input 
                    type="text" 
                    placeholder='Username' 
                    value={username}
                    onChange={(e)=> setUsername(e.target.value)}
                    />
                </div>

                <div className="namediv">
                    <label htmlFor="email">Email:</label>
                    <input 
                    type="text"
                    placeholder='Email'
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                     />
                </div>

                {/* <div className="namediv">
                    <label htmlFor="password">Password: </label>
                    <input 
                    type="text" 
                    placeholder='Password' 
                    id='password'
                    name='password'
                    {...register("password", { required: "Password is required", 
                        pattern: {
                            // value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@
                        },
                        minLength: {
                            value: 4,
                        },
                        maxLength: {
                            value: 10
                        }
                     })}
                    />
                    {errors.password && <span>{errors.password.message}</span>}
                </div> */}

                <button className='buttondiv' type='submit'>Sign Up</button>

                <p>Have an Account? <Link to="/login" style={{
                    color: "gray"
                }}> Click here to Login</Link></p>


            </form>
        </div>
        
    </div>
      
    </>
  )
}

export default Formsignup
