import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const {user, handelSignOut} = useFirebase()
    return (
        <div>
            <nav >
                <Link style={{marginRight:15}} to='/'>Home</Link>
                <Link style={{marginRight:15}} to='/register'>Register</Link>
               {
                user?.uid ?
                <button onClick={handelSignOut}>Logout</button> :
                <Link to='/login'>Login</Link>
               }
            </nav>
            <div style={{margin:15;color:red}}>
            <span>{user?.displayName && user.displayName} </span>
            </div>
        </div>
    );
};

export default Header;