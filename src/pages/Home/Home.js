import { useEffect, useState } from "react";
import { getDestinationIdForPost, getRecommendedPosts } from "../../data/posts";
import Hero from "../components/Hero/Hero";
import PostCard from "../components/PostCard/PostCard";
import './Home.css';

export default function Home() {
    const [ recommendedPosts, setRecommendedPosts ] = useState([]);

    useEffect(() => {
        setRecommendedPosts(getRecommendedPosts());
    }, []);

    return (
        <div className="home-wrapper">
            <Hero />
            <div className="articles-wrapper">
                <div className="articles-label-wrapper">
                    <h3 className="articles-label">Postari recomandate</h3>
                </div>
                <div className="articles-content">
                    {recommendedPosts.map((post, index) => {
                        return <PostCard key={index} destinationId={getDestinationIdForPost(post)} post={post}/>;
                    })}
                </div>
            </div>
        </div>
    );
}