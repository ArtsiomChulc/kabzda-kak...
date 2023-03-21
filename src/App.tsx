import React from 'react';
import './App.css';
import Accordion from "./accordion/Accordion";
import Rating from "./rating/Rating";
import UnControlledRating from "./rating/UnControlledRating";
import { OnOff } from './OnOff/OnOff';
import { OffOn } from './rating/OffOn/OffOn';

function App() {
    return (
        <div className={"wrapper"}>
            <OffOn />
            <TitleApp value={"This is APP component"} />
            <TitleApp value={"My friends"} />
            <Rating value={3} />
            <UnControlledRating />
            <Accordion titleValue={"Menu"} />
            <Accordion titleValue={"Settings"} />
            {/* <Rating value={0} />
            <Rating value={1} />
            <Rating value={2} />
            <Rating value={3} />
            <Rating value={4} />
            <Rating value={5} /> */}
            <OnOff />
            <OnOff />
            <OnOff />
        </div>
    );
}

// const onClickHandler = (on: boolean, setOn: (value: boolean) => void) => {
//     setOn(true)
//     console.log(on)
// }

// export type OnOffPropsType = {
//     callback: (on: boolean, setOn: (value: boolean) => void) => void
//     colorRed?: string
//     colorGreen?: string
// }

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


