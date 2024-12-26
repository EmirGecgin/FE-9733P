import React, { useEffect, useState } from 'react'
import { Posts } from '../types/PostTypes';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
interface LoaderParams {
    userId: string
}
export default function UserPostDetailsPage({ userId }: LoaderParams) {
    const [posts, setPosts] = useState<Posts[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
                setIsLoading(false);
            });
    }, [userId]);

    return (
        <Row>
            {isLoading ? (
                <p>Yükleniyor...</p>
            ) : (
                posts.map((post) => (
                    <Col key={post.id} md={4} className="mb-3">
                        <Card className='h-100'>
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>{post.body}</Card.Text>
                                <Link to={`/users/${userId}/posts/${post.id}`}>
                                    <Button variant="primary">Post Detaylarını Gör</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            )}
        </Row>
    );
}



