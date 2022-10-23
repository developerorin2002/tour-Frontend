import React, { useContext } from 'react';
import { AuthenticationContext } from '../Contexts/AuthContext';
import './UserProfile.css'
const UserProfile = () => {
    const {user , loading} = useContext(AuthenticationContext);
    if(loading){
        return <div>Loading....</div>
        
    };
    
    const {photoURL , displayName , emailVerified} = user;
    return (
        <div>
            <div className="container">
                <div className="row py-4 d-flex users-bg justify-content-center">
                    <div className="col-lg-6  d-flex align-items-center">
                       <div>
                           <img src={photoURL} className=" profile-img img-fluid w-100" alt="" />
                       </div>
                       <div>
                        <h4>{displayName}</h4>
                        
                        {
                            emailVerified?<><p>Email Status :</p><p className='text-success'>Verified</p></>:<><p className='text-danger'>Not Verified</p></>
                        }
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;