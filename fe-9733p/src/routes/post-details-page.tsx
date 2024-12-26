import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { Posts } from '../types/PostTypes';
interface Comments {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}
export const loader = async ({ params }: { params: { postId: string } }) => {
    const { postId } = params;
    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const postCommentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)

    if (!postResponse.ok || !postCommentsResponse.ok) {
        throw new Response("", {
            status: 404,
            statusText: "Post and its comments Not Found",
        });
    }
    const jsonPost = (await postResponse.json()) as Posts;
    const jsonComments = (await postCommentsResponse.json()) as Comments[];
    return { post: jsonPost, comments: jsonComments }
};
export default function PostDetails() {
    const { post, comments } = useLoaderData() as { post: Posts; comments: Comments[] };;

    return (
        <div className="container mt-4">
            <h1>Post</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <h2>Comments</h2>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>
                        {comment.body + " / " + comment.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

