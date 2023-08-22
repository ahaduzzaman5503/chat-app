import React, { useEffect, useRef, useState } from 'react';
import TextMassage from '../TextMassage/TextMassage';
import { collection, doc, onSnapshot, orderBy, query, QuerySnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import SendMassage from '../SendMassage/SendMassage';

const Chat = () => {
    const [massages, setMassages]  = useState([]);
    const scroll = useRef();

    useEffect(() => {
        const q = query(collection(db, 'massages'), orderBy('timestamp'));
        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            let massages = [];
            QuerySnapshot.forEach((doc) => {
                massages.push({...doc.data(), id: doc.id});
            });
            setMassages(massages);
        })
        return () => unsubscribe();
    },[])

    return (
        <>
        <main className='container mx-auto bg-slate-500 rounded shadow-2xl p-5 '>
            <h1>Chat box</h1>
            {massages && massages.map((massage) => (
                <TextMassage key={massage.id} massage={massage}></TextMassage>
            ) )}
        </main>
            <SendMassage scroll={scroll}></SendMassage>
            <span ref={scroll}></span>
        </>
    );
};

export default Chat;