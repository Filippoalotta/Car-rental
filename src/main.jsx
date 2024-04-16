import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/scss/index.scss'
import 'react-router-dom'
import AboutPage from './assets/pages/AboutPage.jsx'
import TeamPage from './assets/pages/TeamPage.jsx'
import VehiclesPage from './assets/pages/VehiclesPage.jsx'
import ContactsPage from './assets/pages/ContactsPage.jsx'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>
  },
  {
    path: '/about',
    element: <AboutPage></AboutPage>
  },
  {
    path: '/vehicles',
    element: <VehiclesPage></VehiclesPage>
  },
  {
    path: '/team',
    element: <TeamPage></TeamPage>
  },
  {
    path: '/contacts',
    element: <ContactsPage></ContactsPage>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
