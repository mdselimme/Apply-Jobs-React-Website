import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Root from './components/Root/Root.jsx';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import ContactPage from './components/ContactPage/ContactPage.jsx';
import ApliedJobs from './components/ApliedJobs/ApliedJobs.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import Login from './components/Login/Login.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"/",
        element: <Home />,
      },
      {
        path:"/home",
        element: <Home />,
      },
      {
        path:"/appliedjobs",
        element: <ApliedJobs />
      },
      {
        path:"/blogs",
        element: <Blogs />,
      },
      {
        path:"/contact",
        element: <ContactPage />,
      },
      {
        path:"/login",
        element: <Login />
      },
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
