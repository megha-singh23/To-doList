import { IoIosArrowDown } from "react-icons/io";
import React from 'react';
const Questions =({items})=>{
    
    const [showanswer,setshowanswer]=React.useState(false);

    return(
        
        <div className="bg-gradient-to-r from-gray-800 to-gray-600 mt-2 font-semibold p-4 max-w-[1000px] mx-auto rounded-xl font-sans">
            
           <div className='flex justify-between items-center'> <h2 className='text-3xl text-white'>{items.ques}</h2>
           <div onClick={()=>{ setshowanswer(!showanswer)}} className={`${showanswer ?" rotate-180": ""} p-2 rounded-full cursor-pointer bg-white`}>
            <IoIosArrowDown /> 
            </div>
            </div> 
            <div className={`${showanswer ? "block" :"hidden"}`}>
            <hr className='my-4'/>
            <p className="text-white">
                {items.ans}
            </p>
            
            </div>
        </div>
    ); 
};

export default Questions;