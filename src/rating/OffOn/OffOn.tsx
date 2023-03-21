import React, { useState } from 'react';


export const OffOn = () => {

	let [on, setOn] = useState(false)

	const onClickHandlerOn = () => {
		setOn(true)
	}
	const onClickHandlerOff = () => {
		setOn(false)
	}

	let styleWrap = {
		width: '300px',
		margin: '20px auto'
	}
	let styleOn = {
		width: '100px',
		padding: '10px',
		marginRight: '10px',
		backgroundColor: on ? 'green' : 'white'
	}
	let styleOff = {
		width: '100px',
		padding: '10px',
		marginRight: '10px',
		backgroundColor: on ? 'white' : 'red'
	}
	let styleSpan = {
		display: 'inline-block',
		width: '20px',
		height: '20px',
		borderRadius: on ? '50%' : 0,
		border: '1px solid black',
		backgroundColor: on ? 'yellow' : 'green'

	}

	return (
		<div style={styleWrap}>
			<button style={styleOn} onClick={onClickHandlerOn}>On</button>
			<button style={styleOff} onClick={onClickHandlerOff}>Off</button>
			<span style={styleSpan}></span>
		</div>
	)
}