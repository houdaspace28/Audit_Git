import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import Info from './pages/Info'
import Response from './pages/Response'
import QstsParPilier from './pages/QstsParPilier'
import NotFound from './pages/NotFound'
import Authorization from './pages/Authorization'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import { ScoreProvider } from './contexts/ScoreContext';

const router = createBrowserRouter([
  { 
    path: '/',
    element: <Authorization/>
  },
  {
    path: '/home',
    element: <Info />,
    errorElement: <NotFound />,
  },
  {
    path: '/audit',
    element: <App />,
    children: [
      {
        path: '/audit/:pilierName/entreprises',
        element: <QstsParPilier />,
      }
    ]
  },
  {
    path: 'entreprises/:nom_entreprise/response',
    element: <Response />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ScoreProvider>
       <RouterProvider router={router} />
    </ScoreProvider>
  </React.StrictMode>,
)
