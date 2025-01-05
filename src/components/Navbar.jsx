import React from "react";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiCodingninjas } from "react-icons/si";
const Navbar=()=>{
    return(
       <nav className="mb-20 flex items-center justify-between py-6">
       <div className="flex flex-shrink-0 items-center"> 
       <img className="mx-2  w-10" src="src/assets/L.jpg" alt="logo"  />
       </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
           <a href="https://www.linkedin.com/in/vishnu-reddy-93924120a/"><FaLinkedin/></a> 
            <a href="https://github.com/Vishnu-Luffy"><FaGithub/></a>
            <a href="https://leetcode.com/u/tenalivishnuvardhanreddy007/"><SiLeetcode/></a> 
            <a href="https://www.naukri.com/code360/profile/ca36926e-a32a-4c9f-b410-a127e7218296"> <SiCodingninjas/></a>
        </div>

       </nav>
    )
}
export default Navbar;