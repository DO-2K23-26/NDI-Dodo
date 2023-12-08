'use client'
import React, { useState } from 'react';
import '../ui/game/style.css';
import Jauge from '../ui/game/Jauge';
import questions from '../ui/game/data.json';
import Question from '../ui/game/Question';


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
					<div>
						{currentQuestionIndex < questions.length ? (
							<>
							<Question
								question={questions[currentQuestionIndex]}
								onReponse={handleReponse}
							/>
							<div className="score">Score: {score}</div>
							</>
						) : (
							<p>Fin du jeu ! Votre score: {score}</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
