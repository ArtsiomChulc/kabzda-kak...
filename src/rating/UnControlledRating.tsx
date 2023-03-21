import React, { useState } from "react";


function UnControlledRating() {

    let [value, setValue] = useState(0)

    // const callBackHandler = () => {


    // }


    return (
        <div>
            <Star selected={value > 0} /><button onClick={() => setValue(1)}>+</button>
            <Star selected={value > 1} /><button onClick={() => setValue(2)}>+</button>
            <Star selected={value > 2} /><button onClick={() => setValue(3)}>+</button>
            <Star selected={value > 3} /><button onClick={() => setValue(4)}>+</button>
            <Star selected={value > 4} /><button onClick={() => setValue(5)}>+</button>
            {/* <Star selected={value > 0} callBack={callBackHandler} />
            <Star selected={value > 1} callBack={callBackHandler} />
            <Star selected={value > 2} callBack={callBackHandler} />
            <Star selected={value > 3} callBack={callBackHandler} />
            <Star selected={value > 4} callBack={callBackHandler} /> */}
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    // callBack: () => void
}

function Star(props: StarPropsType) {
    // let [selected, setSelected] = useState(false)
    // let styleStar = {
    //     paddingLeft: '10px',
    //     cursor: 'pointer',
    // }
    // const onMouseHandler = () => {
    //     props.callBack()
    //     setSelected(!selected)
    // }

    // return (
    //     <>
    //         {selected ? <span style={styleStar} onClick={onMouseHandler}>
    //             <b>star</b>
    //         </span> : <span style={styleStar} onClick={onMouseHandler}>
    //             star
    //         </span>}
    //     </>

    // )
    if (props.selected) {
        return <span className={"span-start"}><b>star</b></span>;
    } else {
        return <span className={"span-start"}>star</span>;
    }
}


export default UnControlledRating;