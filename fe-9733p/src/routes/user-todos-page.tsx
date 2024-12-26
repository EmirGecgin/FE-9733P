import React, { useEffect, useState } from 'react';
import { Todos } from "../types/TodosTypes";
import { useLoaderData } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Albums } from '../types/AlbumsTypes';

interface LoaderParams {
    userId: string
}
export default function UserTodosPage({ userId }: LoaderParams) {
    const [todos, setTodos] = useState<Todos[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
            .then((response) => response.json())
            .then((data) => {
                setTodos(data);
                setIsLoading(false);
            });
    }, [userId]);

    return (
        <Row>
            {isLoading ? (
                <p>Yükleniyor...</p>
            ) : (
                todos.map((todo: Todos) => (
                    <Col key={todo.id} md={4} className="mb-3">
                        <Card className='h-100'>
                            <Card.Body>
                                <Card.Title>{todo.title}</Card.Title>
                                <Card.Text>{todo.completed ? 'Done' : 'Not Done'}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            )}
        </Row>
    );
}
