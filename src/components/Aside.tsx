import React from 'react';

interface AsideProps {
   image: any;
}

const Aside: React.FC<AsideProps> = ({ image }) => {

   
   return (
      <div
         className="w-full h-[50vh] bg-cover bg-center text-slate-50 flex items-center "
         style={{ backgroundImage: `url(${image?.src})` }}
      >
         <h1 className=' text-8xl font-bold font-[cursive] ml-20 ' >Official <br /> Simpsons</h1>
      </div>
   );
};

export default Aside;