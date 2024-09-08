import React from "react";
export default function Counter(){
    const [count,fn]=React.useState(0);
    
    function inc(){
        fn(count+1);
    }
    function dec(){
        fn(count-1);
    }
    return(
       <div className="flex justify-center items-center bg-gradient-to-br from-indigo-300 to-pink-600 h-screen w-screen">
        <div className="text-center bg-white p-10 rounded-3xl" >
        <h2 className="font-bold text-2xl">Count : {count}</h2>
        <br /> <br />
        <div className="flex gap-10 justify-center">
            <button onClick={inc} className="bg-indigo-300 rounded-xl p-3 font-bold hover:bg-indigo-400">++</button>
            <button onClick={dec} className="bg-indigo-300 rounded-xl text-lg p-3 font-bold hover:bg-indigo-400 tracking-[5px]">--</button>
        
        </div>
        </div>
       </div>
    );
};