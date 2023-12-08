import './header.css';
import Link from 'next/link';

export default function Header() {
	return (
		<>
			<header className='header'>
				<nav className='navbar'>
					<ul className='nav-list'>
						<li className='nav-item'>
							<Link href='/'>Accueil</Link>
						</li>
						<li className='nav-item'>
							<Link href='/game'>Jeu</Link>
						</li>
						<li className='nav-item'>
							<Link href='/solution'>Solutions</Link>
						</li>
						<li className='nav-item'>
							<Link href='/source'>Sources</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
