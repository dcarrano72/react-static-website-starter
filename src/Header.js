
import './App.css';
import Nav from './Nav';

function Header() {
    return (
        <div className="header">
            <h1 className="logo">Website</h1>
            <Nav />
            <p className="phone">(888) 888-8888</p>
        </div>
    );
}

export default Header;
