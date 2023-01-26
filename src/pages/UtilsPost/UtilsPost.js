import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUtilsPostByPostId } from '../../data/utilities';
import './UtilsPost.css';

export default function UtilsPost() {
    const { postId } = useParams();
    const [ post, setPost ] = useState(null);

    useEffect(() => {
        setPost(getUtilsPostByPostId(postId));
    }, [postId]);

    return (
        <>
            { post && (
                <div className='utils-post-wrapper'>
                    <div className='utils-post-content'>
                        <img className="utils-post-content-image" src={post.image} />
                        <div className='utils-post-content-wrapper'>
                            <h2 className="utils-post-title">{post.title}</h2>
                            <p className='utils-post-content-description'>{post.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
           
}