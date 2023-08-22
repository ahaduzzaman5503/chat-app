import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
const style = {
    massage: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full  `,

  sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full `,
};

const TextMassage = ({ massage }) => {
 const massageClass = massage.uid === auth.currentUser?.uid ?
 `${style.sent}` : `${style.received}`

  return (
    <div>
      <div className={`${style.massage} ${massageClass}`}>
        <div>
          <img
            className="rounded-full w-12 h-12  "
            src={massage.photoURL}
            alt=""
          />
        </div>
        <div>
          <p className="text-gray-400 mb-1">{massage?.name}</p>
          <p className="text-xl ">{massage.text}</p>
        </div>
      </div>
    </div>
  );
};

export default TextMassage;
