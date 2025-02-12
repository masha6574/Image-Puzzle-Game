import './index.css';
import Home from './Home';
import Game from './Game';
import Win from "./Win";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/game",
      element: <Game />
    },
    {
      path: "/win",
      element: <Win />
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>


  );
}

export default App;
