import React, { useState } from "react";

type AccordionPropsType = {
    titleValue: string
}

function Accordion(props: AccordionPropsType) {

    const [collapsed, setCollapsed] = useState(true)
    let styleSpanTitle = {
        display: 'inline-block',
        border: '1px solid black',
        padding: '5px',
        cursor: 'pointer',
        borderRadius: '12px',
        backgroundColor: 'rgb(245, 48, 48)'
    }

    const onClickHandler = () => {
        // collapsed ? setCollapsed(false) : setCollapsed(true)
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue} />
            <span style={styleSpanTitle}
                onClick={onClickHandler}>
                collapsed
            </span>
            {!collapsed && <AccordionBody />}
        </div>

    )

}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {



    let styleTitle = {
        display: 'inline-block',
        marginRight: '10px'
    }



    return (
        <>
            <h3 style={styleTitle}>{props.title}</h3>

        </>
    )
}

function AccordionBody() {
    return (
        <>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </>
    )
}
export default Accordion;
