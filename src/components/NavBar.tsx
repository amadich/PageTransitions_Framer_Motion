import React from 'react';
import Link from 'next/link';
const NavBar: React.FC = () => {
   return (
      <nav className="bg-gray-800 text-slate-50 ">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
               <div className="flex items-center">
                  <div className="flex-shrink-0">
                     <h1> C A R T O O N  </h1>
                  </div>
                  <div className="hidden md:block">
                     <div className="ml-10 flex items-baseline space-x-4">
                        <Link href="/">Home</Link>
                        <Link href="/About">About</Link>
                        <Link href="/contact">Contact</Link>
                     </div>
                  </div>
               </div>
               <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                     {/* Add your user profile or login/logout button here */}
                  </div>
               </div>
            </div>
         </div>
      </nav>
   );
};

export default NavBar;