import React from 'react';
import { User } from '../types/UserTypes';
import { useLoaderData } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import UserCard from '../components/UserCard';
export const userLoader = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
        throw new Response("", {
            status: 404,
            statusText: "Users Not Found",
        });
    }
    return response.json();
};

export default function UserPage() {
    const users = useLoaderData() as User[];
    return (
        <>
            <Container>
                <h1 className='text-center my-3'>User List</h1>
                <Row>
                    {users.map((user: User) => (
                        <Col key={user.id} md={4} className="mb-4">
                            <UserCard user={user} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

