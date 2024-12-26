import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage, HomePage, Root, UserPage, UserPageDetails, UserPageLoader, UserDetailsLoader, UserPostDetailsPage, UserAlbumsDetailsPage, UserTodosDetailsPage, PostDetails, PostLoader, AlbumsDetailsPage, AlbumPhotosLoader, FavoritesPage } from './routes';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <HomePage />,
            loader: UserPageLoader,
          },
          {
            path: "/users",
            element: <UserPage />,
            loader: UserPageLoader,
          },
          {
            path: "/users/:userId",
            element: <UserPageDetails />,
            loader: UserDetailsLoader as any,
          },
          {
            path: "/users/:userId/posts",
            element: <UserPostDetailsPage userId={''} />,
          },
          {
            path: "/users/:userId/albums",
            element: <UserAlbumsDetailsPage userId={''} />,
          },
          {
            path: "/users/:userId/todos",
            element: <UserTodosDetailsPage userId={''} />,
          },
          {
            path: "/users/:userId/posts/:postId",
            element: <PostDetails />,
            loader: PostLoader,
          },
          {
            path: "/users/:userId/albums/:albumId",
            element: <AlbumsDetailsPage />,
            loader: AlbumPhotosLoader,
          },
          {
            path: "/favorites",
            element: <FavoritesPage />,
          },
        ],
      },
    ],
  }
]);
ReactDOM.createRoot(document.getElementById("root")!).render(

  <RouterProvider router={router} />

)
