
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (

        <nav>
            <ul>
                <Link to="/"><li className="nav-link">Home</li></Link>
                <Link to="/about"><li className="nav-link">About</li></Link>
                <Link to="/services"><li className="nav-link">Services</li></Link>
                <Link to="/contact"><li className="nav-link">Contact</li></Link>
            </ul>
        </nav>

    );
}

export default Nav;
