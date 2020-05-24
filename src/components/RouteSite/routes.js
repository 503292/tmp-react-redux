import HomePage from "../../pages/HomePage";
import AboutPage from "../../pages/AboutPage";
import ErrorPage from "../../pages/ErrorPage";

export default [
    {
      path: '/',
      exact: true,
      component: HomePage,
    },
    {
      path: '/about',
      exact: false,
      component: AboutPage,
    },
    {
      path: '/',
      exact: false,
      component: ErrorPage,
    },
  ];