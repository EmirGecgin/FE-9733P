import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useStore } from '../stores/store'
import { Link, useParams } from 'react-router-dom';

export default function FavoritesPage() {
    const { favorites, removeFavorite } = useStore();
    return (
        <>
            <Container>
                <div>
                    <h1>Favorites</h1>
                    <ul>
                        {favorites.map(fav => (
                            <li>
                                <div>
                                    {fav.title}
                                </div>
                                <div>
                                    <img src={fav.thumbnailUrl} alt={fav.title} />
                                </div>
                                <p>By user: <Link to={`/users/${fav.userId}`}>{fav.userId}</Link></p>
                                <Button onClick={() => removeFavorite(fav.id)}>Unfavorive</Button>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </>
    )
}

