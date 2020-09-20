import React, { useState } from 'react';
import Stepper from './Stepper/Stepper';
import './App.css';

const App = () => {
	const [ steps, setSteps ] = useState([ 'Shipping', 'Payment', 'Review','Finish' ]);
	const [ count, setCount ] = useState(0);

	const Next = () => {
		setCount((prev) => prev + 1);
	};

	const Back = () => {
		setCount((prev) => prev - 1);
	};

	return (
		<div className="container">
			<div className="stepper">
				<Stepper steps={steps} active={count} />
				<h1 className="steps-content">{steps[count] + ' ' + parseInt(count + 1)}</h1>
				<div className="btns">
					<button disabled={count === 0 && true} className="btn back" onClick={Back}>
						Back
					</button>
					<button disabled={count === steps.length - 1 && true} className="btn next" onClick={Next}>
						{count === steps.length - 1 ? 'Finish' : 'Next'}
					</button>
				</div>
			</div>
		</div>
	);
};

export default App;
