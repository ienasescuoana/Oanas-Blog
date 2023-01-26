import { faLightbulb, faLocationDot, faPersonDress, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import logoImage from './../../../assets/logo.svg';
import './Navbar.css';

export default function Navbar() {
    return (
        <div className="navbar">
            <Link className='logo' to="/">
                    <img className='logo-img' src={logoImage}/> Oana's Blog
            </Link>
            <div className="categories">
                <ul className="categories-list">
                    <li className="category">
                        <Link className='link' to={`/destinations`}>
                            <FontAwesomeIcon icon={faLocationDot} /> Destinatii
                        </Link>
                    </li>
                    <li className="category">
                        <Link className='link' to={`/utils`}>
                            <FontAwesomeIcon icon={faLightbulb} /> Utile
                        </Link>
                    </li>
                    <li className="category">
                        <Link className='link' to={`/about`}>
                            <FontAwesomeIcon icon={faPersonDress} /> Despre mine
                        </Link>
                    </li>
                    <li className="category">
                        <Link className='link' to={`/contact`}>
                            <FontAwesomeIcon icon={faPhone} /> Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
 }