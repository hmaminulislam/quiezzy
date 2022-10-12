import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import QuizDetails from './components/QuizDetails/QuizDetails';
import Statistics from './components/Statistics/Statistics';
import Main from './layout/Main';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      errorElement: <ErrorPage />,
      loader: async () => {
        return fetch("https://openapi.programming-hero.com/api/quiz");
      },
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'statistics',
          loader: async () => fetch ("https://openapi.programming-hero.com/api/quiz/"),
          element: <Statistics />
        },
        {
          path: '/blog',
          element: <Blog />
        },
        {
          path: '/quiz/:id',
          loader: async ({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <QuizDetails />
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
