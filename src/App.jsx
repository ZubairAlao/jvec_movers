import Home from "./pages/Home"
import { AnimatePresence } from "framer-motion";
import NotFound from "./pages/NotFound"
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import ErrorPage from "./components/ErrorPage";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  },
]);
function App() {

  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  )
}

export default App
