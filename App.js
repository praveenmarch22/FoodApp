import React from "react";
import  ReactDOM from "react-dom/client";

const element= <h1 className="heading1" > Hello JSX! </h1>;

const p2=(
    <h1 className="Multi">
        This is multi-lines jsx !
    </h1>
);

const nested=(
    <div id="container">
        <h1> This is a nested jsx! </h1>
    </div>
);

const twoElements=(
[
    <h1>hi hello first line</h1>,
    <h2>Hi hello second line</h2>
]);

const head=(
    <div>
        {element}
        {p2}
        {nested}
        {twoElements}
    </div>
);


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(head);


