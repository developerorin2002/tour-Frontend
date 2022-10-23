import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import facebook from '../../Assets/images/icons/fb.png'
import googleImg from '../../Assets/images/icons/google.png'
import { AuthenticationContext } from '../../Contexts/AuthContext';
const Registration = () => {

    const {registration , varifyEmail,profileUpdate , google} = useContext(AuthenticationContext)
    const handleGoogleSignIn = () =>{
        google()
        .then(res=>{
            toast.success('Registration Successfull')
        })
        .catch(res=>console.log(res))
    }
    const [accepted , setAccepted ] = useState(false);
    const handleAccepted = (event)=>{
        const checked = event.target.checked;
        setAccepted(checked)
    }
    const handleRegistration = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        registration(email ,password)
        .then(res=>{
            toast.success('Registration Successfull');
            varifyEmail()
            .then(res=>{
                toast.success('Please Verify Your Email');
                profileUpdate(name)
                .then(res=>{
                    toast.success('Profile Updated')
                })
                .catch(err=>console.log(err))
            })

        })
        .catch(err=>console.log(err))
        form.reset();
    }
    return (
        <div>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-6 py-4">
                        <div className="login-forms px-3 py-4">
                            <h2 className='text-center py-1'>Please Register</h2>
                            <div>
                                <form onSubmit={handleRegistration}>
                                    <div>
                                    <input className='w-100 py-2 border-input' type="email" name="email" placeholder='Write Your Email' />
                                    </div>
                                    <div>
                                    <input className='w-100 py-2  mt-3 border-input' type="password" name="password" placeholder='password'/>
                                    </div>
                                    <div>
                                    <input className='w-100 py-2 mt-3 border-input' type="text" name="name" placeholder='Write Your Name'/>
                                    </div>
                                    <div className='py-3'>
                                        <input onClick={handleAccepted}  type="checkbox" name="check"/> Accept Terms And Conditions
                                    </div>
                                    <div>
                                        <button disabled={!accepted} className='w-100 picker-btn'  type="submit">Register</button>
                                    </div>
                                </form>
                                <div className='py-2 mt-3 fb-border'>
                                    <div>
                                         <img className='fb' src={facebook} alt="" /><span className='mx-3'>Login With Facebook</span>
                                    </div>
                                </div>
                                <div className='py-2 mt-3 fb-border'>
                                    <div>
                                        <button onClick={handleGoogleSignIn} className='border-0'> <img className='fb' src={googleImg} alt="" /><span className='mx-3'>Login With Google</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration