import { create } from 'zustand'
import { persist, PersistOptions } from 'zustand/middleware';
interface AlbumsDetails {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
    userId: number
}
interface Store {
    favorites: AlbumsDetails[],
    addFavorite: (album: AlbumsDetails) => void,
    removeFavorite: (id: number) => void
}
type MyPersist = PersistOptions<Store>
export const useStore = create<Store>()(
    persist((set) => ({
        favorites: [],
        addFavorite: (album: AlbumsDetails) => set((state) => ({ favorites: [...state.favorites, album] })),
        removeFavorite: (id: number) => set((state) => ({ favorites: state.favorites.filter((album: AlbumsDetails) => album.id !== id) })),
    }),
        {
            name: "favoriteStorage",
        } as MyPersist
    ))