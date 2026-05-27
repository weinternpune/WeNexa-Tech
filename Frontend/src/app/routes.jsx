import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Service from "../pages/ServicePage/Service";
import Portfolio from "../pages/Portfolio/Portfolio";
import Product from "../pages/Product/Product";
import ContactForm from "../pages/Contact/ContactPage";
import Blog from "../pages/Blog/Blog";
import HireTalentPage from "../pages/HireTalent/Hiretalent";

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
},
  {
  path: "/services",
  element: (
    <MainLayout>
      <Service />
    </MainLayout>
  ),
},
,
  {
  path: "/portfolio",
  element: (
    <MainLayout>
      <Portfolio />
    </MainLayout>
  ),
}
,
  {
  path: "/products",
  element: (
    <MainLayout>
      <Product />
    </MainLayout>
  ),
}
,
  {
  path: "/contact",
  element: (
    <MainLayout>
      <ContactForm />
    </MainLayout>
  ),
},
{
  path: "/blog",
  element: (
    <MainLayout>
      <Blog />
    </MainLayout>
  ),
},
{
  path: "/hire-talent",
  element: (
    <MainLayout>
      <HireTalentPage/>
    </MainLayout>
  ),
}
];

export default routes;