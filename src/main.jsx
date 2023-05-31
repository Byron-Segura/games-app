import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { SimilarGames } from './pages/SimilarGames/SimilarGames.jsx'
import { UpcomingGames } from './pages/UpcomingGames/UpcomingGames.jsx'
import { Root } from './routes/Root.jsx'
import { Home } from './pages/Home/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'similar-games',
        element: <SimilarGames />
      },
      {
        path: 'upcoming-games',
        element: <UpcomingGames />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
