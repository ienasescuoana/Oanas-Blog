import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Contact.css';

export default function Contact() {
    const handleSentMailTo = (e) => {
        window.location.href = 'mailto:oana.ienasescu00@gmail.com';
        e.preventDefault();
    }

    return (
        <div className='contact-container'>
            <h1 className='contact-title'>Contact</h1>
            <p className='contact-about'>Dacă îți dorești să-mi oferi un feedback, aștept cu drag mesajul tău!</p>
            <div className='contact-content-wrapper'>
                <div className='find-me-wrapper'>
                    <h3 className='find-me-label'>Unde ma gasesti?</h3>
                    <div className='find-me-links-wrapper'>
                        <Link className='find-me-link' to='#' onClick={handleSentMailTo}>
                            <FontAwesomeIcon className='find-me-icon' icon={faEnvelope}/> <p>oana.ienasescu00@gmail.com</p>
                        </Link>
                        <Link className='find-me-link' to='/'>
                            <FontAwesomeIcon className='find-me-icon' icon={faGlobe}/> Oana's Blog
                        </Link>
                    </div>
                </div>
                <div className='social-media-wrapper'>
                    <h3 className='social-label'>Social Media</h3>
                    <div className='social-media-buttons-wrapper'>
                        <a href="https://www.facebook.com/oana.ienasescu">
                            <button
                                className='social-media-button'
                            >
                                <FontAwesomeIcon icon={faFacebook}/> Urmateste-ma pe Facebook
                            </button>
                        </a>
                        <a href="https://www.instagram.com/ienasescu_oana/">
                            <button className='social-media-button'>
                                <FontAwesomeIcon icon={faInstagram}/> Urmateste-ma pe Instagram
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}