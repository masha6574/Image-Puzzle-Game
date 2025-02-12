import './index.css';
import Home from './Home';
import Game from './Game';
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
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>


  );
}

export default App;
