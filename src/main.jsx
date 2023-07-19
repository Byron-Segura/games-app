import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { SimilarGames } from './pages/SimilarGames/SimilarGames.jsx'
import { Root } from './routes/Root.jsx'
import { Home } from './pages/Home/Home'
import { LatestReleases } from './pages/LatestReleases/LatestReleases'
import { UpcomingGames } from './pages/UpcomingGames/UpcomingGames'
import { Error } from './pages/ErrorPage/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
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
      },
      {
        path: 'latest-releases',
        element: <LatestReleases />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
