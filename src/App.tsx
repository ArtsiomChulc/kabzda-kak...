import React from 'react';
import './App.css';
import Accordion from "./accordion/Accordion";
import Rating from "./rating/Rating";

function App() {
    return (
        <div className={"wrapper"}>
            <TitleApp value={"This is APP component"} />
            <TitleApp value={"My friends"} />
            <Rating value={3} />
            <Accordion titleValue={"Menu"} collapsed={true} />
            <Accordion titleValue={"Settings"} collapsed={false} />
            <Rating value={0} />
            <Rating value={1} />
            <Rating value={2} />
            <Rating value={3} />
            <Rating value={4} />
            <Rating value={5} />
        </div>
    );
}

type TitleAppPropsType = {
    value: string
}

function TitleApp(props: TitleAppPropsType) {
    return (
        <>
            <h2>{props.value}</h2>
        </>
    )
}





export default App;
