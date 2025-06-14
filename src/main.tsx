import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GalleryPage from './pages/gallery/GalleryPage.tsx'
import HomePage from './pages/home/HomePage.tsx'
import AncestryPage from './pages/ancestry/AncestryPage.tsx'
import FamilyTree from './pages/family-tree/FamilyPage.tsx'
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
        element: <GalleryPage />,
      },
      {
        path: '/ancestry',
        element: <AncestryPage />,
      },
      {
        path: '/vanshavali',
        element: <FamilyTree />
      }
    ],
  },


])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
