import React from 'react'
import { Link, useLoaderData, useParams } from "react-router-dom";
import { User } from '../types/UserTypes';
import { Button, Card } from "react-bootstrap";
import UserPageTabs from '../components/UserPageTabs';

export async function loader({ params }: { params: { userId: string } }) {
    const { userId } = params;
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/" + userId
    );
    const json = (await response.json()) as User;
    //console.log("API Response:", response);
    const userNotFound = !json.id;
    //console.log("Fetched Posts:", json);
    if (userNotFound) {
        throw new Response("", {
            status: 404,
            statusText: "User Not Found",
        });
    }
    return { user: json };
}
export default function UserPageDetails() {
    const { user } = useLoaderData() as { user: User };
    //console.log(user);
    const { userId } = useParams();
    console.log(userId);
    return (
        <>
            <div className="container mt-4">
                <Card className="shadow">
                    <Card.Body>
                        <Card.Title>{user.name}</Card.Title>
                        <Card.Subtitle className="mb-3 text-muted">
                            @{user.username}
                        </Card.Subtitle>
                        <Card.Text>
                            <strong>Email:</strong> {user.email}
                            <br />
                            <strong>Phone:</strong> {user.phone}
                            <br />
                            <strong>Website:</strong>{" "}
                            <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">
                                {user.website}
                            </a>
                            <br />
                            <strong>Address:</strong>{" "}
                            {`${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}
                            <br />
                            <strong>Company:</strong> {user.company.name}
                            <br />
                            <strong>Catch Phrase:</strong> {user.company.catchPhrase}
                            <br />
                            <strong>BS:</strong> {user.company.bs}
                            <div className='my-2'>
                                <UserPageTabs userId={userId} />
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>

    )
}

