import React from 'react';
const style = {
    massage: `p-1 rounded-md shadow-white shadow-2xl`
}

const TextMassage = ({massage}) => {

    return (
        <div>
            <div className={style.massage}>
                <p >Jone</p>
                <p>{massage.text}</p>
            </div>
        </div>
    );
};

export default TextMassage;