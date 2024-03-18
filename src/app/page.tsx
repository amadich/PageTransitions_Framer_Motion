"use client";
import NavBar from "@/components/NavBar";

import Banner from "../../public/assets/simpsons-feature.png";
import Aside from "@/components/Aside";


import { motion } from "framer-motion";
import Section from "@/components/Section";

export default function Home() {
  return (
    

    <>
          <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.01 } }}
    >
      <NavBar />
      <Aside image={Banner} />
      </motion.div>


      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 , transition: { duration: 2 }  }}
    >

        <div className="w-[50%] table m-auto text-center mt-10 items-center justify-around">
                <h1 className="text-3xl font-bold">SimpSon World</h1>
                <p className="text-center">
                  equuntur ipsum earum quidem, atque eum laudantium, ea provident vitae nostrum, magnam sit nam delectus
                  blanditiis. Atque, nulla voluptatem? equuntur ipsum earum quidem, atque eum laudantium, ea provident vitae
                  nostrum, magnam sit nam delectus blanditiis. Atque, nulla voluptatem? equuntur ipsum earum quidem, atque eum
                  laudantium, ea provident vitae nostrum, magnam sit nam delectus blanditiis. Atque, nulla voluptatem? equuntur
                  ipsum earum quidem, atque eum laudantium, ea provident vitae nostrum, magnam sit nam delectus blanditiis.
                  Atque, nulla voluptatem? equuntur ipsum earum quidem, atque eum laudantium, ea provident vitae nostrum,
                  magnam sit nam delectus blanditiis. Atque, nulla voluptatem?
                </p>
          </div>

    </motion.div>

    <Section />
     
    </>

     
 
  );
}
