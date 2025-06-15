import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Nav from "./components/Nav";
import Loign from "./pages/login";
import DiscoverBlogs from "./pages/discoverBlogs";
import CreateBlog from "./pages/createBlog"
import SignUp from "./pages/signUp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  {
    path: "/login",
    element: <Loign />,
  },{
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/discoverBlogs",
    element: <DiscoverBlogs />,
  },
  {
    path: "/createBlog",
    element: <CreateBlog />,
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Nav />
    <RouterProvider router={router} />
  </StrictMode>
);
