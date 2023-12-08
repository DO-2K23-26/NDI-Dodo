// Jauge.js
export default function Jauge({ valeur }) {
	const hauteurPointeur = valeur; // Ajustez cette logique selon vos besoins

	const styleJauge = {
		height: '300px', // Taille plus grande pour une meilleure visibilité
		width: '60px',
		background: 'linear-gradient(to top, blue, red)',
		borderRadius: '25px', // Bordures arrondies pour un look plus doux
		boxShadow: '0 0 10px rgba(0,0,0,0.5)', // Ombre pour un effet 3D
		position: 'relative',
		margin: '20px', // Marge pour éviter que la jauge touche d'autres éléments
	};

	const stylePointeur = {
		position: 'absolute',
		bottom: `${hauteurPointeur}%`,
		left: '0',
		right: '0',
		height: '8px',
		backgroundColor: 'black',
		borderRadius: '5px',
		transition: 'bottom 0.3s ease', // Animation fluide
	};

	const styleTexte = {
		position: 'absolute',
		top: '5px',
		width: '100%',
		textAlign: 'center',
		color: 'white',
		fontWeight: 'bold',
	};

	return (
		<div style={styleJauge}>
			<div style={stylePointeur}>
				<div style={styleTexte}>{valeur}</div>
			</div>
		</div>
	);
}
