import React from "react";
import {CONTACT} from "../constants"
const Footer=()=>{
    return (
       <div className="border-b border-neutral-900 pb-20">
           <h1 my-10 text-center text-4xl>Contact </h1>
           <div className="text-center tracking tracking-tighter">
            <p className="my-4">{CONTACT.address}</p>
            <p className="my-4">
                 {CONTACT.phoneNo}
            </p>
            <a href="#" className="border-b">{CONTACT.email}</a>
           </div>
        </div>
    );
};
export default Footer;