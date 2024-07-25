import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home/Home.js";
import Services from "../pages/Services/Services.js";

const RouterHandler = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "home",
          element: <Home />,
        }
        ,
        {
          path: "services",
          element: <Services />,
        }
      ],
    },
    {
      path: "auth",
      element: <Login/>,
    }
  ]);
  
  return <RouterProvider router={router} />;
};

export default RouterHandler;
