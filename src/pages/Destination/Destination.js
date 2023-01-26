import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostsFromDestination } from "../../data/posts";
import { getDestinationById } from "../../data/destinations";
import PostCard from "../components/PostCard/PostCard";
 
import './Destination.css';

export default function Destination() {
    const [ destinationPosts, setDestinationPosts ] = useState([]);
    const { destinationId } = useParams();

    useEffect(() => {
        setDestinationPosts(getPostsFromDestination(destinationId));
    }, [destinationId]);

    return (
        <div className="destination-container">
            <div className='destination-data'>
                <h2 className='destination-data-title'>{getDestinationById(destinationId).name}</h2>
            </div>
            <div className="destination-posts">
                {destinationPosts.map((post, index) => {
                    return <PostCard key={index} destinationId={destinationId} post={post} />;
                })}
            </div>
        </div>
    );
}