import Question from'./questions';
import Data from  '../assets/data';



const QuestionList=()=>{
  
  return (
    <div className='text-white w-7 h-[300px]'>Notes</div> ,
    <div className='p-1 bg-gradient-to-r from-gray-800 to-gray-600  w-full h-full'>
    { Data.map((items,index)=>{
       return( <Question key={index} items={items}/>)
    })};
    
    </div>
  );
};

export default QuestionList;


