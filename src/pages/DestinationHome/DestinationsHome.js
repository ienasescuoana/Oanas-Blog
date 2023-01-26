import { useEffect, useState } from 'react';
import { getAllPostOrderedByDate, getDestinationIdForPost } from '../../data/posts';
import PostCard from '../components/PostCard/PostCard';
import './DestinationsHome.css';

export default function DestinationHome() {
    const [ allPosts, setAllPosts ] = useState([]);

    useEffect(() => {
        setAllPosts(getAllPostOrderedByDate());
    }, []);


    return <div className='destination-home-wrapper'>
        <div className="destination-home-content">
            {allPosts.map((post, index) => {
                return <PostCard key={index} destinationId={getDestinationIdForPost(post)} post={post}/>;
            })}
        </div>
    </div>;
}