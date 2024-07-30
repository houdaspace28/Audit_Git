import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import Info from './pages/Info'
import Response from './pages/Response'
import QstsParPilier from './pages/QstsParPilier'
import NotFound from './pages/NotFound'
import Authorization from './pages/Authorization'
import First from './pages/First'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import { ScoreProvider } from './contexts/ScoreContext';
import EntrepriseDetails from './pages/EntrepriseDetails'
import Help from './pages/Help'

const router = createBrowserRouter([
  {
     path:"/",
     element: <First />
  },
  {
    path: '/help',
    element: <Help />
  },
  { 
    path: '/auth',
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
  },
  {
    path: 'entreprises/details/:nom_entreprise',
    element: <EntrepriseDetails />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ScoreProvider>
       <RouterProvider router={router} />
    </ScoreProvider>
  </React.StrictMode>,
)
