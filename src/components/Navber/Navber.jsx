import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import SignIn from '../SignIn/SignIn';
import LogOut from '../LogOut/LogOut';


const Navber = () => {
    const [user] = useAuthState(auth)
    console.log(user);
    return (
        <div className='bg-gray-500 flex justify-around items-center'>
            <h1 className='text-center font-bold text-2xl'>Navber</h1>
            {
                user?  <LogOut></LogOut> : <SignIn></SignIn>
            }
            
           
        </div>
    );
};

export default Navber;