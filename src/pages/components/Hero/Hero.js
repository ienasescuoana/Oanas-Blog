import './Hero.css'; 
import heroImage from '../../../assets/hero-image.png';
import { Link } from 'react-router-dom';

export default function Hero() {
    return <div className='hero-wrapper'>
        <div className='hero-info-wrapper'>
            <div className='hero-info'>
                <h1 className='hero-title'>Oana's Blog</h1>
                <p className='hero-subtitle'>Tu ce regreti cel mai tare in viata? Ceva ce ai facut sau...</p>
                <Link to={'/about'} className='hero-link'>
                    <button className='hero-button'>Afla mai multe...</button>
                </Link>
            </div>
        </div>
        <img className='hero-image' src={heroImage} />
    </div>;
}