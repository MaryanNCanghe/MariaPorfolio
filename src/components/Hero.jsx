import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto  `}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#fcdce5]' />
          <div className='w-1 sm:h-80 h-40 green-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-black'>Maria</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop Web Aplications, 3D interfaces and Admnistrator 
            <br className='sm:block hidden' />
          </p>
          <div className="mt-10">
  
</div>
<div className="flex space-x-4 mt-7">
  <a href="https://www.linkedin.com/in/maria-n-canha-77232a27a/" className=" text-[#fcdce5] hover:text-[#F2F3E0] ">
    <i className="fa-brands fa-linkedin fa-2x"></i>
  </a>
  <a href="https://www.instagram.com/_maryancanghe/" className="text-[#fcdce5] hover:text-[#F2F3E0]">
    <i className="fa-brands fa-square-instagram fa-2x"></i>
  </a>
  <a href="https://github.com/MaryanNCanghe" className="text-[#fcdce5] hover:text-[#F2F3E0]">
    <i className="fa-brands fa-github fa-2x"></i>
  </a>
</div>

        </div>
         
       
        
      </div>
       



      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center '>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 bg-[#fff]'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

      
    </section>
  );
};

export default Hero;