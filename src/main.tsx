import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GallerySection from './pages/home/sections/Gallery.section'
import { HomePage } from './pages/home/Home.page'
import AncestryPage from './pages/ancestry/AncestryPage.tsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/gallery',
        element: <GallerySection />,
      },
    ],
  },
  {
    path: '/ancestry',
    element: <AncestryPage />,
  }

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
