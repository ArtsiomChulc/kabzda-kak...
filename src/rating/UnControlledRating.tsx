import React, { useState } from "react";


function UnControlledRating() {

    let [value, setValue] = useState(0)




    return (
        <div>
            <Star selected={value > 0} /><button onClick={() => setValue(1)}>+</button>
            <Star selected={value > 1} /><button onClick={() => setValue(2)}>+</button>
            <Star selected={value > 2} /><button onClick={() => setValue(3)}>+</button>
            <Star selected={value > 3} /><button onClick={() => setValue(4)}>+</button>
            <Star selected={value > 4} /><button onClick={() => setValue(5)}>+</button>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    // callBack: () => void
}

function Star(props: StarPropsType) {

    // let styleStar = {
    //     paddingLeft: '10px',
    //     cursor: 'pointer',
    // }
    // const onMouseHandler = (setValue: (value: number) => void) => {
    //     props.callBack()
    // }

    // return (
    // <>
    //     {props.selected ? <span style={styleStar} onMouseEnter={onMouseHandler}>
    //         <b>star</b>
    //     </span> : <span style={styleStar} onMouseEnter={onMouseHandler}>
    //         star
    //     </span>}
    // </>

    // )
    if (props.selected) {
        return <span className={"span-start"}><b>star</b></span>;
    } else {
        return <span className={"span-start"}>star</span>;
    }
}


export default UnControlledRating;