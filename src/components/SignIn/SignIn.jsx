import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import React from 'react';
import GoogleButton from 'react-google-button';
import { auth } from '../../firebase';

const SignIn = () => {
    const googleSignin = () => {
        const provider = new GoogleAuthProvider()
        signInWithRedirect(auth, provider)
    }
    return (
        <div>
            <GoogleButton
            onClick={googleSignin}
            ></GoogleButton>
        </div>
    );
};

export default SignIn;