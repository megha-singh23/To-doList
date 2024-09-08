const Data =[
   { ques:"What is React?",
    ans:"React is a JavaScript library for building user interfaces, developed by Facebook. It allows developers to create reusable UI components."},
    
    {ques: "What is JSX?",
    ans: "JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It allows you to write HTML elements and components in JavaScript files."},
    {ques:"What are components in React?",
    ans:"Components are reusable pieces of UI that can be either functional or class-based. They manage their own state and render UI based on that state."},
    
    { ques:"What is the difference between state and props?",
    ans:"State is managed within a component and can be changed, while props (short for properties) are passed to components by their parent and are immutable within the child component."},
    
    {ques:"What is the Virtual DOM?",
    ans:"The Virtual DOM is a lightweight representation of the actual DOM. React uses it to optimize updates by comparing the current Virtual DOM with the previous one and only making necessary changes to the real DOM."},
    
    {ques:"What are hooks?",
    ans:"Hooks are functions that let you use state and other React features in functional components. Examples include useState"},
    
    
    { ques:"How do you handle events in React?",
    ans:"Events in React are handled using event handlers that are passed as props. For example, <button onClick={handleClick}>Click me</button>."},
    
   {ques:" What is the purpose of key prop?",
    ans:"The key prop helps React identify which items have changed, are added, or are removed from lists. It improves performance and helps maintain component state."}
    
];

export default Data;