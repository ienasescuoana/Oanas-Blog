import { createContext, useState } from "react";

export const PostsContext = createContext(null);

export default function PostsContextProvider({ children }) {
    const [ postsComments, setPostsComments ] = useState([]);

    const addCommentToPost = (post, username, comment) => {
        const postInfo = {
            destinationId: parseInt(post.destinationId),
            postId: parseInt(post.postId),
            comments: [{
                username:username, 
                comment: comment
            }]
        }

        const postIndex = findPostIndexInList(postsComments, postInfo);
        
        if(postIndex === -1) {
            postsComments.push(postInfo);
        } else {
            postsComments[postIndex].comments.push({
                username: username,
                comment: comment
            });
        }

        setPostsComments([...postsComments]);
    }

    const findPostIndexInList = (list, post) => {
        const postIndex = list.findIndex((listPost) => 
            listPost.postId === post.postId && listPost.destinationId === post.destinationId
        );

        return postIndex;
    }

    const getCommentsFromPostInList = (list, destinationId, postId) => {
       const postComments = list.find(
           (listPost) =>
               listPost.destinationId === parseInt(destinationId) &&
               listPost.postId === parseInt(postId)
       );

       return postComments ? postComments.comments : []
    }

    return (
        <PostsContext.Provider 
            value={{
                postsComments,
                addCommentToPost,
                getCommentsFromPostInList
            }}
        >
            {children}
        </PostsContext.Provider>
    );
}