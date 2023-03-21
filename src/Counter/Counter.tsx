import React, { useState } from 'react';



export const Counter = () => {
	let [count, setCount] = useState(0)

	let styleWrap = {
		width: '250px',
		margin: '20px auto 40px',
	}
	let styleButton = {
		width: '60px',
		padding: '5px',
		marginRight: '15px'
	}

	const onclickPlus = () => {
		setCount(++count)
	}
	const onclickMinus = () => {
		setCount(--count)
	}

	return (
		<div style={styleWrap}>
			<button style={styleButton} onClick={onclickMinus}>-</button>
			<button style={styleButton} onClick={onclickPlus}>+</button>
			<span>{count}</span>
		</div>
	)
}