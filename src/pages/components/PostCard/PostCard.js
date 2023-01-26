import './PostCard.css';
import { Link } from 'react-router-dom';

export default function PostCard( { destinationId, post } ) {
    return (
        <div className="post-card">
            <div className='post-card-content'>
                <Link to={`/destinations/${destinationId}/post/${post.id}`}>
                    <img className="image" src={post.image} />
                </Link>
                <div className='details-wrapper'>
                    <p className="post-since">Posted on {post.date}</p>
                    <p className="post-title">{post.title}</p>
                    <h3 className='post-description'>{post.description[0].slice(0, 220)}...</h3>
                </div>
            </div>
            <Link className='link-wrapper' to={`/destinations/${destinationId}/post/${post.id}`}>
                <button className='link-button'>Continua sa citesti...</button>
            </Link>
        </div>
    );
}