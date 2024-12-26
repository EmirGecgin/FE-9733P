import React from "react";
import { Card, Button, } from "react-bootstrap";
import { User } from "../types/UserTypes";
import "../styles/CardStyles.css";
import { Link } from "react-router-dom";
interface UserCardProps {
    user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
    return (
        <Card className="h-100">
            <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {user.username}
                </Card.Subtitle>
                <Card.Text>
                    <strong>Email:</strong> {user.email} <br />
                    <strong>Phone:</strong> {user.phone} <br />
                    <strong>Website:</strong> {user.website}
                </Card.Text>
                <Link to={`/users/${user.id}`}>
                    <Button variant="primary">Detayları Gör</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default UserCard;
