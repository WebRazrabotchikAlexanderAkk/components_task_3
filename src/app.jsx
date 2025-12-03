import { useState } from 'react';
import styles from './app.module.css';

export const App = () => {
	const buttons = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '=', '0', 'C'];

	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [isResult, setIsResult] = useState(false);

	const valueToDisplay = isResult
		? operand1
		: [operand1, operator, operand2].filter(Boolean).join(' ') || '0';
	const isLongValue = valueToDisplay.length >= 16;

	const handleDigit = (digit) => {
		if (isResult) {
			setOperand1(digit);
			setOperand2('');
			setOperator('');
			setIsResult(false);
		} else if (!operator) {
			setOperand1((prev) => (prev === '0' ? digit : prev + digit));
		} else {
			setOperand2((prev) => (prev === '0' ? digit : prev + digit));
		}
	};

	const handleOperator = (op) => {
		if (operand1) {
			setOperator(op);
			setIsResult(false);
		}
	};

	const handleEquals = () => {
		if (!operand1 || !operand2 || !operator) return;

		const num1 = parseFloat(operand1);
		const num2 = parseFloat(operand2);

		if (isNaN(num1) || isNaN(num2)) return;

		const result = operator === '+' ? num1 + num2 : num1 - num2;
		const resultStr = result.toString();

		setOperand1(resultStr);
		setOperand2('');
		setOperator('');
		setIsResult(true);
	};

	const handleClear = () => {
		setOperand1('');
		setOperand2('');
		setOperator('');
		setIsResult(false);
	};

	const handleClick = ({ target }) => {
		if (!target || !target.textContent) return;

		const value = target.textContent.trim();

		if (/\d/.test(value)) {
			handleDigit(value);
		} else if (value === '+' || value === '-') {
			handleOperator(value);
		} else if (value === '=') {
			handleEquals();
		} else if (value === 'C') {
			handleClear();
		}
	};

	return (
		<div className={styles.app}>
			<h1>Калькулятор</h1>
			<div className={styles.calculator}>
				<div className={styles['grid-container']}>
					<div
						className={`${styles.display} ${isResult && styles.displayResult} ${
							isLongValue ? styles.smallFont : ''
						}`}
					>
						{valueToDisplay}
					</div>
					<div className={styles.numpad}>
						{buttons.map((num) => {
							return (
								<button
									key={num}
									className={`${styles.button} ${/\d/.test(num) ? '' : styles.operatorBtn}`}
									onClick={handleClick}
								>
									{num}
								</button>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
