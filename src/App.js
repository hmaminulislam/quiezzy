import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Main from './layout/Main';
import loaderQuizData from './loaders/loaders';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      loader: loaderQuizData,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/blog',
          element: <Blog />
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
