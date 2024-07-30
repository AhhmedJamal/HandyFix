import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import Home from "../pages/Home/Home.tsx";
import Services from "../pages/Services/Services.tsx";
import Signup from "../pages/Signup/Signup.tsx";
import Login from "../pages/Login/Login.tsx";


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
      path: "login",
      element: <Login/>,
    },
    {
      path: "signup",
      element: <Signup/>,
    },
  ]);
  
  return <RouterProvider router={router} />;
};

export default RouterHandler;
