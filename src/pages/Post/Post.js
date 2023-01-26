import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PostsContext } from './../../contexts/PostContextProvider';
import Comment from './../components/Comment/Comment';
import { getPostByDestinationIdAndPostId } from '../../data/posts';
import './Post.css';

export default function Post() {
    const { 
        postsComments,
        addCommentToPost,
        getCommentsFromPostInList
    } = useContext(PostsContext);
    const { destinationId, postId } = useParams();
    const [ post, setPost ] = useState(null)
    const [ comment, setComment ] = useState('');
    const [ username, setUsername ] = useState('');
    const [ currentPostComments, setCurrentPostComments ] = useState([]);
    const [ commentInputUser, setCommentInputUser ] = useState(null);
    const [ commentInputConent, setCommentInputConent ] = useState(null);

    useEffect(() =>{
        const posts = [...postsComments].reverse();
        const comments = getCommentsFromPostInList(posts, destinationId, postId);

        setCurrentPostComments(comments);
    }, [postsComments, destinationId, postId]);

    useEffect(() => {
        setPost(getPostByDestinationIdAndPostId(destinationId, postId));
    }, [destinationId, postId]);

    useEffect(() => {
        setCommentInputUser(null);
    }, [commentInputUser]);

    useEffect(() => {
        setCommentInputConent(null);
    }, [commentInputConent]);

    return (
        <>
            { post && (
                <div className='post-wrapper'>
                    <div className='post-content'>
                        <img className="post-content-image" src={post.image} />
                        <div className='post-content-wrapper'>
                            <h2 className="post-title">{post.title}</h2>
                            <p className="post-content-info">Posted on {post.date}</p>
                            {post.description.map((paragraph) => (
                                <p className='post-content-description'>{paragraph}</p>
                            ))}
                        </div>
                        
                        <div className='comments-wrapper'>
                            <h4 className='comments-label'>Comentarii</h4>
                            {currentPostComments && (
                                currentPostComments.map((postComments, index) => (
                                    <Comment key={index} username={postComments.username} comment ={postComments.comment}/>
                                )
                            ))}
                            <div className='comments-input-wrapper'>
                                <div className='comment-input-container'>
                                    <input 
                                        className='comment-input-name'
                                        placeholder='Adauga numele tau...'
                                        onChange={(event) => setUsername(event.target.value)}
                                        value={commentInputUser}
                                    />
                                    <input 
                                        className='comment-input-text'
                                        placeholder='Spune-ne parerea ta aici...'
                                        onChange={(event) => setComment(event.target.value)}
                                        value={commentInputConent}
                                    />
                                </div>
                                <button 
                                    disabled={(!comment || !username)}
                                    className='comment-button'
                                    onClick={() => (
                                        addCommentToPost(
                                            {destinationId, postId: post.id},
                                            username, 
                                            comment
                                        ),
                                        setCommentInputUser(''),
                                        setCommentInputConent('')
                                    )}
                                >Posteaza comentariu
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}