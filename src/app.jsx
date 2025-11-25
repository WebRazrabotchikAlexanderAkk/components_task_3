// import { useState } from 'react';
import styles from './app.module.css';

export const App = () => {
	return (
		<div className={styles.app}>
			<h1>Калькулятор</h1>

			{/* Главный контейнер калькулятора */}
			<div className={styles.calculator}>
				{/* Дисплей */}
				<div className={styles.display}>56,1</div>

				{/* Сетка: цифры слева, операции справа */}
				<div className={styles['grid-container']}>
					{/* Контейнер кнопок цифр */}
					<div className={styles.numpad}>
						<button className={styles.button}>7</button>
						<button className={styles.button}>8</button>
						<button className={styles.button}>9</button>
						<button className={styles.button}>4</button>
						<button className={styles.button}>5</button>
						<button className={styles.button}>6</button>
						<button className={styles.button}>1</button>
						<button className={styles.button}>2</button>
						<button className={styles.button}>3</button>
						<button className={styles.button}>0</button>
					</div>

					{/* Блок операций */}
					<div className={styles.operators}>
						<button className={`${styles.button} ${styles.operatorBtn}`}>+</button>
						<button className={`${styles.button} ${styles.operatorBtn}`}>-</button>
						<button className={`${styles.button} ${styles.operatorBtn}`}>=</button>
						<button className={`${styles.button} ${styles.resetBtn}`}>C</button>
					</div>
				</div>
			</div>
		</div>
	);
};

/**
 1. Планирование верстки (структуры)
Перед написанием JSX скелета, подумай какие основные визуальные блоки нужны:

Обертка калькулятора (главный контейнер)

Дисплей (куда выводится ввод/результат)

Контейнер для кнопок цифр (0–9), расположенных сеткой

Блок для кнопок операций: +, -, =, C (рядышком или отдельной строкой)

Рекомендуемый порядок:

Сначала сделай главный контейнер для калькулятора.

Внутри расположи дисплей.

Затем рядышком или ниже — кнопки калькулятора (цифры и операции).
 */
