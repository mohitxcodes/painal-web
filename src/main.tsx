import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GallarySection from './pages/home/sections/Gallary.section'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/gallary',
    element: <GallarySection />,
  },


])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
