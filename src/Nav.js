import { Link, useLocation } from 'react-router-dom';

function Nav() {
    const { pathname } = useLocation();
    return (
        <nav className='nav nav-tabs mt-2'>
            <Link to='/hello' className={`nav-link ${pathname.includes('hello') ? "active" : ""}`}>Hello</Link>
            <Link to='/Kanbas' className={`nav-link ${pathname.includes('Kanbas') ? 'active' : ''}`}>Kanbas</Link>
            <Link to='/Labs/a3' className={`nav-link ${pathname.includes('a3') ? 'active' : ''}`}>Assignment 3</Link>
            <Link to='/Labs/a4' className={`nav-link ${pathname.includes('a4') ? 'active' : ''}`}>Assignment 4</Link>
            <Link to='/Labs/a5' className={`nav-link ${pathname.includes('a5') ? 'active' : ''}`}>Assignment 5</Link>
        </nav>
    )
}

export default Nav;