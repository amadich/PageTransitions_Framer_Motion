"use client";
import NavBar from '@/components/NavBar';
import React from 'react';
import Banner from "../../../../public/assets/Cue_Detective_69.jpg";
import Aside from '@/components/Aside';
import Footer from '@/components/Footer';

import { motion } from 'framer-motion';

const About: React.FC = () => {
   return (
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 , transition: { duration: 0.1 }  }}
    >
         <NavBar />
         <Aside image={Banner} />

         <div className=" w-full flex m-auto text-center mt-10 items-center justify-around " >
            <h1 className="text-3xl font-bold" > SimpSon World </h1>
              <p  className="w-[80%] text-center " >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus assumenda nobis nesciunt ad ipsum quaerat quia omnis reprehenderit aspernatur iure mollitia corporis ab, explicabo eius modi voluptatem nemo perferendis dolore!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sit sint blanditiis, doloribus tempora eius quibusdam praesentium quas, voluptatum assumenda nesciunt quaerat molestias ea architecto esse vero repellat unde animi.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum esse placeat consequuntur ipsum earum quidem, atque eum laudantium, ea provident vitae nostrum, magnam sit nam delectus blanditiis. Atque, nulla voluptatem?
                explicabo eius modi voluptatem nemo perferendis dolore!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sit sint blanditiis, doloribus tempora eius quibusdam praesentium quas, voluptatum assumenda nesciunt quaerat molestias ea architecto esse vero repellat unde animi.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum esse placeat consequuntur ipsum earum quidem, atque eum laudantium, ea provident vitae nostrum, magnam sit nam delectus blanditiis. Atque, nulla voluptatem?
                explicabo eius modi voluptatem nemo perferendis dolore!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sit sint blanditiis, doloribus tempora eius quibusdam praesentium quas, voluptatum assumenda nesciunt quaerat molestias ea architecto esse vero repellat unde animi.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum esse placeat consequuntur ipsum earum quidem, atque eum laudantium, ea provident vitae nostrum, magnam sit nam delectus blanditiis. Atque, nulla voluptatem?
              </p>
          </div>

            <Footer />

      </motion.div>
   );
};

export default About;