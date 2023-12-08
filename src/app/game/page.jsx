import '../ui/game/style.css';
import Jauge from '../ui/game/Jauge';
import questions from '../ui/game/data.json';
import Question from '../ui/game/Question';
import { useState, useEffect } from 'react';

('use client');

export default function page() {
	const valeur = 50;
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [score, setScore] = useState(0);

	const handleReponse = (reponse) => {
		if (reponse === questions[currentQuestionIndex].reponse) {
			setScore(score + 1);
		}
		setCurrentQuestionIndex(currentQuestionIndex + 1);
	};

	return (
		<div className='global'>
			<div className='game_area'>
				<div className='temp'>
					<Jauge valeur={valeur} />
				</div>
				<div className='ask'>
					{currentQuestionIndex < questions.length ? (
						<Question
							question={questions[currentQuestionIndex]}
							onReponse={handleReponse}
						/>
					) : (
						<p>Fin du jeu ! Votre score: {score}</p>
					)}
					<div className='score'>Score: {score}</div>
				</div>
			</div>
		</div>
	);
}
