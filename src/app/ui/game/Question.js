const Question = ({ question, onReponse }) => (
	<div className='question-card'>
		<p>{question.question}</p>
		<button onClick={() => onReponse(true)}>Vrai</button>
		<button onClick={() => onReponse(false)}>Faux</button>
	</div>
);
