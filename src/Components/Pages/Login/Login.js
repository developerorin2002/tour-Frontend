import React, { useContext } from 'react';
import './Login.css'
import facebook from '../../Assets/images/icons/fb.png'
import googleImg from '../../Assets/images/icons/google.png'
import { AuthenticationContext } from '../../Contexts/AuthContext';
import toast from 'react-hot-toast';
import {Link, useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {handleLogIn , google} = useContext(AuthenticationContext)
    const handleGoogle = () =>{
        google()
        .then(res=>{
            toast.success('Login Successfully');
            navigate(from, { replace: true }); 
    })
        .catch(err=>console.log(err))
    }
    const from = location.state?.from?.pathname || "/";
    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        handleLogIn(email, password)
        .then(res=>{
            
            if(res.user.emailVerified){
                toast.success('Login Successfully')
                navigate(from, { replace: true }); 
            }else{
                toast.error('Please Verify Your Mail')
            }
        
        });
        form.reset();
        
    }

    return (
        <div>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-6 py-4">
                        <div className="login-forms px-3 py-4">
                            <h2 className='text-center py-1'>Please Login</h2>
                            <div>
                                <form onSubmit={handleLogin}>
                                    <div>
                                    <input className='w-100 py-3 border-input' type="email" name="email" />
                                    </div>
                                    <div>
                                    <input className='w-100 py-3 mt-3 border-input' type="password" name="password" />
                                    </div>
                                    <div>
                                        <button className='w-100 picker-btn' type="submit">Login</button>
                                    </div>
                                </form>
                                <div className='py-2 mt-3 fb-border'>
                                    <div>
                                         <img className='fb' src={facebook} alt="" /><span className='mx-3'>Login With Facebook</span>
                                    </div>
                                </div>
                                <div className='py-2 mt-3 fb-border'>
                                    <div>
                                         <button onClick={handleGoogle} className='border-0'><img className='fb' src={googleImg} alt="" /><span className='mx-3'>Login With Google</span></button>
                                    </div>
                                  
                                </div>
                                <p>Dont Have An Account ? <Link to='/register'>Please Register</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;