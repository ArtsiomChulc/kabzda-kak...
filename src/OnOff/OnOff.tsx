import React, { useState } from 'react';
// import { OnOffPropsType } from '../App';


export const OnOff = () => {

	let [on, setOn] = useState(false)

	const onClickHandler = () => {
		setOn(true)
	}
	const offClickHandler = () => {
		setOn(false)
	}

	let styleOn = {
		width: '100px',
		height: '30px',
		cursor: 'pointer',
		backgroundColor: on ? 'green' : 'white',
	}
	let styleOff = {
		width: '100px',
		height: '30px',
		cursor: 'pointer',
		backgroundColor: on ? 'white' : 'red'
	}

	let styleLamp = {
		display: 'inline - block',
		width: '30px',
		height: '30px',
		borderRadius: '50%',
		border: '1px solid black',
		backgroundColor: on ? 'yellow' : 'rgb(177, 177, 237)',
	}


	return (
		<div className='on-off'>
			<div className='btns'>
				<button style={styleOn} onClick={onClickHandler}>ON</button>
				<button style={styleOff} onClick={offClickHandler}>OFF</button>
			</div>
			<div className='lamps'>
				<span style={styleLamp}></span>
			</div>
		</div>
	)
}