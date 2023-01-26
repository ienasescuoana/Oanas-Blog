import './UtilsCard.css';
import { Link } from 'react-router-dom';

export default function UtilsCard( {post } ) {
    return (
        <div className="utils-card">
            <div className='utils-card-content'>
                <Link to={`${post.id}`}>
                    <img className="image" src={post.image} />
                </Link>
                <div className='details-wrapper'>
                    <p className="utils-title">{post.title}</p>
                    <h3 className='utils-description'>{post.description.slice(0, 225)}...</h3>
                </div>
            </div>
            <Link className='link-wrapper' to={`${post.id}`}>
                <button className='link-button'>Continua sa citesti...</button>
            </Link>
        </div>
    );
}