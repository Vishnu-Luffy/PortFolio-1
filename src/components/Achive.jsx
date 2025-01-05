import React from "react";
import {motion} from "framer-motion"
const Achive=()=>{
    return (
        <div className="flex-col justify-center items-center ">
         <motion.h2
           whileInView={{opacity:1,y:0}}
           initial={{opacity:0,y:-100}}
           transition={{duration:1}}
          className="text-4xl text-center">Achivements</motion.h2>

          <motion.p
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:-100}}
              transition={{duration:1}}
           className="py-4">During my academic journey, I have demonstrated excellence in both sports and personal development. At the collegiate level, I showcased my volleyball prowess by winning three tournaments. In school, I was an integral part of our team that triumphed in the prestigious National Level Lagore Championship. My versatility extends beyond traditional sports; I received recognition for my skills in various esports teams. Additionally, I was honored with a medal for all-round development during my intermediate studies, reflecting my commitment to holistic growth.
          Apart from volleyball and esports, I have actively participated in a range of sports, including shuttle, cricket, and swimming, further highlighting my diverse athletic abilities.</motion.p>
          <div className="flex flex-wrap justify-center gap-2">
            <motion.img 
               whileInView={{opacity:1,x:0}}
               initial={{opacity:0,x:-100}}
               transition={{duration:1}}
            className="w-[400px] h-[400px]" src="../assets/Achivements/Game.jpg" alt="Game" />
            <motion.img
                 whileInView={{opacity:1,x:0}}
                 initial={{opacity:0,x:100}}
                 transition={{duration:1}}
             className="w-[400px] h-[400px]" src="../assets/Achivements/Kabaddi.jpg" alt="Game" />
            <motion.img
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:1}}
             className="w-[400px] h-[400px]" src="../assets/Achivements/Medal.jpg" alt="Game" />
            <motion.img
                  whileInView={{opacity:1,x:0}}
                  initial={{opacity:0,x:100}}
                  transition={{duration:1}}
             className="w-[400px] h-[400px]" src="../assets/Achivements/Vollyball.jpg" alt="Game" />
          </div>
        </div>
    )
}
export default Achive;