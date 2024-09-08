import { IoReorderThreeOutline } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";
import React from "react";
import { Link } from 'react-router-dom';

const First = () => {
    const [show, setShow] = React.useState(false);

    const toggleShow = () => {
        setShow(!show);
    };

    return (
        <div>
            
            <div 
                onClick={toggleShow} 
                className="mx-2 text-[70px] cursor-pointer"
            >
                <IoReorderThreeOutline />
            </div>
            
            <h1 className="text-[90px] text-center text-gray-700 my-3 mx-7">
                REACT
            </h1>
            
            
            <a href="#" className="block text-center text-blue-500 underline my-2">
                Learn React with the World
            </a>

            
            {show && (
                <div className="fixed top-0 left-0 h-screen w-[180px] bg-black text-white p-4 flex flex-col">
                    <TiDeleteOutline 
                        onClick={() => setShow(false)}
                        className="text-white text-[24px] cursor-pointer self-end"
                    />
                    <div className="p-2 space-y-6">
                    <Link to="/question-list" className="text-xl font-semibold cursor-pointer">Notes</Link>
                    <h2 className="text-xl font-semibold cursor-pointer">Practice</h2>
                    <h2 className="text-xl font-semibold cursor-pointer">Projects</h2>
                    <h2 className="text-xl font-semibold cursor-pointer">Search Jobs</h2>
                    </div>
                </div>
            )}
        </div>
    );
};

export default First;
