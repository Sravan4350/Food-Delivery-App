import ReactDOM from "react-dom/client"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import NavBar from "./src/components/NavBar/navBar"
import BodyComponent from "./src/components/Home/HomeComponent"
import About from "./src/components/About/About"
import Contact from "./src/components/Contact/Contact"
import NotFound from "./src/components/NavBar/NotFound"
import Product from "./src/components/ProductCard/Product"
import { ProductCards  } from "./src/components"
import { lazy, Suspense } from "react"

const Grocery = lazy(() => import('./src/components/Grocery'))

const AppLayout = () => {
  return (
    <div className="app">
      <NavBar />
      <Outlet />
    </div>
  )
}
const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout />,
    children : [
      {
        index:true,
        element:<BodyComponent />
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <NotFound />
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <NotFound />
      },
      {
        path: "/product",
        element: <ProductCards  />,
        errorElement: <NotFound />
      },
      {
        path: "/product/:id",
        element:  <Product />,
        errorElement: <NotFound />
      },
      {
        path: "/grocery",
        element:  (<Suspense fallback={<h1>Loading......</h1>}><Grocery /></Suspense>),
        // We can ignore Suspense because RouterProvider's have Built-in Suspense, it is used for older versions
        errorElement: <NotFound />
      }
    ],
    errorElement: <NotFound />,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)