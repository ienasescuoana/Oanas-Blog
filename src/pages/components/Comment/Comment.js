import './Comment.css';
import userLogo from './../../../assets/user-logo.svg';

export default function Comment( {comment, username} ) {

    return (
        <div className='comment-container'>
            <div className='comment-wrapper'>
                <div className='comment-user'>
                    <img className='commnet-user-img' src={userLogo} />
                    <p className='comment-user-name'>{username}</p>
                </div>
                <p className='comment-text'>{comment}</p>
            </div>
        </div>

    );
}