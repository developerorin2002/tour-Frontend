import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png'
import { AuthenticationContext } from '../Contexts/AuthContext';
import './Header.css'
const Header = () => {
    const {user , logOut} = useContext(AuthenticationContext);
    const handleLogOut = () =>{
        logOut()
        .then(res=>toast.success('Successfully Log Out'))
    }
    return (
        <div>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-3">
                        <img src={logo} className='logo-img' alt="" />
                    </div>
                    <div className="col-lg-4 header-input">
                        <input className='w-100' type="text" placeholder='Search Hotel' />
                    </div>
                    <div className="col-lg-5 nav-link">
                        <Link to='/home'>Home</Link>
                        
                       {
                        user&&user.uid ?
                        <>
                        <Link to='/profile'>Profile</Link>
                        <Link to='/profile' className='profile-link'><img className='avatar' src={user?.photoURL} alt="" /></Link>
                        <button className='mx-2 btn btn-warning' onClick={handleLogOut}>LogOut</button>
                        
                        <p>{user.displayName}</p>
                        </> 
                        :
                        <>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                        </>
                       }
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;