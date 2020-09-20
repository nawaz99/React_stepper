import React from 'react';
import './Stepper.css';

const Stepper = ({ steps, active }) => {
	return (
		<div className="steps">
			{steps.map((step, index) => {
				return (
					<div key={index}>
						{index === steps.length - 1 ? (
							<div className={`step ${index + 1 === active + 1 ? 'active' : ''}`}>
								<div className="num">{index + 1}</div>
								<div>{step}</div>
							</div>
						) : (
							<div className={`step ${index + 1 === active + 1 ? 'active' : ''}`}>
								<div className="num">{index + 1}</div>
								<div>{step}</div>
								<div className="line" />
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default Stepper;
