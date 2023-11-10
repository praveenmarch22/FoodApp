import React from "react";
import  ReactDOM from "react-dom/client";

//  React Functional components
const Title=() => {
    return (
    [<h1>namaste using component</h1>,
     <h2>namste react</h2>]

)};
const HeadingComponent=()=>(
    <div>
        <Title/>
         <h1 className="heading">namste react using jsx </h1>
    </div>
   
);


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);


