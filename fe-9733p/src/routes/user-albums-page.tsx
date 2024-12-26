import React, { useEffect, useState } from 'react'
import { Albums } from "../types/AlbumsTypes";
import { Link, useLoaderData } from 'react-router-dom';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
interface LoaderParams {
    userId: string
}
export default function UserAlbumsPage({ userId }: LoaderParams) {
    const [albums, setAlbums] = useState<Albums[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
            .then((response) => response.json())
            .then((data) => {
                setAlbums(data);
                setIsLoading(false);
            });
    }, [userId]);

    return (
        <Row>
            {isLoading ? (
                <p>Yükleniyor...</p>
            ) : (
                albums.map((album: Albums) => (
                    <Col key={album.id} md={4} className="mb-3">
                        <Card className='h-100'>
                            <Card.Body>
                                <Card.Title>{album.title}</Card.Title>
                                <Link to={`/users/${userId}/albums/${album.id}`}>
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

