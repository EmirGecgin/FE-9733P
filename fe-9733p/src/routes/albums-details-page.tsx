import React from 'react'
import { Button } from 'react-bootstrap';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { useStore } from '../stores/store';

interface AlbumsDetails {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
    userId: number
}
export const loader = async ({ params }: { params: { albumId: string } }) => {
    const { albumId } = params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
    if (!response.ok) {
        throw new Response("", {
            status: 404,
            statusText: "Albums Not Found",
        });
    }
    const json = (await response.json()) as AlbumsDetails[];
    return { albums: json }
}
export default function AlbumsDetailsPage() {
    const { albums } = useLoaderData() as { albums: AlbumsDetails[] };
    const { favorites, addFavorite, removeFavorite } = useStore();
    const { userId } = useParams();
    const handleFavorites = (album: AlbumsDetails) => {
        if (favorites.some((fav) => fav.id === album.id)) {
            removeFavorite(album.id);
        } else {
            addFavorite({ ...album, userId: Number(userId) });
        }
    }
    return (
        <>
            <div className="container mt-4">
                <h1>Albums</h1>
                <ul>
                    {albums.map(album => (
                        <li key={album.id}>
                            <p>{album.title}</p>
                            <img src={album.thumbnailUrl} alt={album.title} />
                            <div className='mt-2'>
                                <Button onClick={() => (handleFavorites(album))}>
                                    {favorites.some((fav) => fav.id === album.id) ? "Unfavorite" : "Favorite"}
                                </Button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

