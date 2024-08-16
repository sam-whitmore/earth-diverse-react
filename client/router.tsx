/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Home from './components/Home'
import Courses from './components/Courses'
import Admin from './components/Admin'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="courses" element={<Courses />} />
      <Route path="admin" element={<Admin />} />
    </Route>
    
  ])
)

export default router
