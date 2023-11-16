import React from "react";
import  ReactDOM from "react-dom/client";

const Title= () => (
    <h1>
        Namaste react using title component
    </h1>
);

const value=123;

const TitleComponent= () =>(
     <h1>
        {value}
        Namaste react using functional component
    </h1>
);


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<TitleComponent></TitleComponent>);


