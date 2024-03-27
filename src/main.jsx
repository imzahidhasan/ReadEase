import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import ListedBooks from './Pages/ListedBooks.jsx'
import PagesToRead from './Pages/PagesToRead.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'
import AboutUs from './Pages/ContactUs.jsx'
import Community from './Pages/Community.jsx'
import BookDetails from './Pages/BookDetails.jsx'
import { Toaster } from 'react-hot-toast'
import ReadBookList from './component/ReadBook/ReadBookList.jsx'
import WishListPage from './component/WishList/WishListPage.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch('/BookData.json')
      },
      {
        path: 'listed-books',
        element: <ListedBooks />,
        children: [
          {
            index: true,
            element: <ReadBookList />
          },
          {
            path: 'Wish-list',
            element: <WishListPage />
          }
        ]
      },
      {
        path: 'page-to-read',
        element: <PagesToRead />
      },
      {
        path: 'contact-us',
        element: <AboutUs />
      },
      {
        path: 'community',
        element: <Community />
      },
      {
        path: 'book-details/:bookId',
        element: <BookDetails />,
        loader: () => fetch('/BookData.json')

      }
    ]
  },

]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>,
)
