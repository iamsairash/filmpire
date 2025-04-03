import { createBrowserRouter } from "react-router-dom";
import App from "../components/App";
import { Actors, MovieInformation, Movies } from "../components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <h1>Movies</h1>,
      },
      {
        path: "/movie/:id",
        element: <h1>Movie Information</h1>,
      },
      {
        path: "/actors/:id",
        element: <h1>Actors</h1>,
      },
      {
        path: "/movie/:id",
        element: <h1>Movie Information</h1>,
      },
      {
        path: "/profile/:id",
        element: <h1>Profile</h1>,
      },
    ],
  },
]);

export default router;
