import React, { useState } from 'react';
import { auth, db } from '../../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const style = {
    form: `h-14 w-full max-w-[728px] flex text-xl absolute bottom-0`,
input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
button: `w-[20%] bg-green-500`
}

const SendMassage = ({scroll}) => {
    const [input, setInput] = useState('')

    const sendMassage = async (e) => {
        e.preventDefault()
        if (input == '') {
            alert('Please enter a valid massage')
            return
        }
        const {uid, displayName, photoURL} = auth.currentUser
        await addDoc(collection(db, 'massages'), {
            text: input,
            name: displayName,
            uid: uid,
            timestamp: serverTimestamp(),
            photoURL: photoURL
        })
        setInput('')
        scroll.current.scrollIntoView({bahavior: 'smooth'})
    }
    return (
        <div className='container mx-auto' >
        <form onSubmit={sendMassage} className={style.form} >
             <input
             value={input}
             onChange={(e) => setInput(e.target.value)}
             className={style.input} type="text" placeholder='Send Massage' />
             <button className={style.button}  type="submit">Send</button>
        </form>
        </div>
    );
};

export default SendMassage;