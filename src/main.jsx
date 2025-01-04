import ReactDOM from "react-dom/client";
import Body from "./ui/pages/Body";
import Error from "./ui/components/Error";
import Menu from "./ui/pages/Menu";
import About from "./ui/pages/About";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./ui/pages/Cart";
import SearchBar from "./ui/pages/SearchBar";
import App from "./App";
import "./index.css";
import Dish from "./ui/pages/Dish";
import Collection from "./ui/pages/Collection";
import PrivacyPolicy from "./ui/extras/PrivacyPolicy";
import TermsOfService from "./ui/extras/TermsOfService";
import CookiePolicy from "./ui/extras/CookiePolicy";

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resid",
        element: <Menu />,
      },
      {
        path: "/search",
        element: <SearchBar />,
      },
      {
        path: "/search/:type/:name",
        element: <Dish />,
      },
      {
        path: "/collection/:name/:id",
        element: <Collection />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms-of-service",
        element: <TermsOfService />,
      },
      {
        path: "/cookie-policy",
        element: <CookiePolicy />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
