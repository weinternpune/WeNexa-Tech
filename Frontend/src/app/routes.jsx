import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";

const routes = [
  {
    path: "/",
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
  {
  path: "/about",
  element: (
    <MainLayout>
      <About />
    </MainLayout>
  ),
}
];

export default routes;