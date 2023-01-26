import aboutMe from '../../data/about-me';
import './About.css';
import mainImg from './../../assets/about-me-main.jpg';
import otherImage1 from './../../assets/about-me-other1.jpg';
import otherImage2 from './../../assets/about-me-other2.jpg';
import otherImage3 from './../../assets/about-me-other3.jpg';

export default function About() {
    return(
        <div className='about-container'>
            <h1 className='about-me-title'>Despre mine</h1>
            <div className='about-me-description-subcontainer'>
                <div className='text-wrapper'>
                    <h2 className='text-main-title'>Hello</h2>
                    <h3 className='text-title'>{aboutMe.title}</h3>
                    {aboutMe.description.map((message) => {
                        return <p className='text-description'>{message}</p>
                    })}
                    <h3 className='text-final'>{aboutMe.final}</h3>
                </div>
                <img className='main-image' src={mainImg}/>
            </div>
            <div className='about-me-motto-subcontainer'>
                <h1 className='motto'>{aboutMe.motto}</h1>
            </div>
            <div className='about-me-images-subcontainer'>
                <img className='other-image' src={otherImage1}/>
                <img className='other-image' src={otherImage2}/>
                <img className='other-image' src={otherImage3}/>
            </div>
        </div>
    );
}