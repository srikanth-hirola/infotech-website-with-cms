import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './component/scrollToTop/ScrollToTop';
import { HelmetProvider } from 'react-helmet-async';
import 'bootstrap/dist/css/bootstrap.min.css';
// Home Pages Import
import DigitalAgency from './pages/DigitalAgency';
import CreativeAgency from './pages/CreativeAgency';
import PersonalPortfolio from './pages/PersonalPortfolio';
import HomeStartup from './pages/HomeStartup';
import CorporateAgency from './pages/CorporateAgency';

// Blog Import
import BlogGridView from './pages/BlogGrid';
import BlogCategory from './pages/Category';
import BlogArchive from './pages/Archive';
import BlogDetails from './pages/BlogDetails';

// Service
import ServiceOne from './pages/ServiceOne';
import ServiceTwo from './pages/ServiceTwo';
import ServiceDetails from './pages/ServiceDetails';

// Project
import ProjectGridOne from './pages/ProjectGridOne';
import ProjectGridTwo from './pages/ProjectGridTwo';
import ProjectGridThree from './pages/ProjectGridThree';
import ProjectGridFive from './pages/ProjectGridFive';
import ProjectGridFour from './pages/ProjectGridFour';
import ProjectDetails from './pages/ProjectDetails';

// Pages
import AboutUs from './pages/AboutUs';
import OurOffice from './pages/OurOffice';
import OurClients from './pages/OurClients';
import Team from './pages/Team';
import TeamDetails from './pages/TeamDetails';
import CaseStudy from './pages/CaseStudy';
import CaseDetails from './pages/CaseStudyDetails';
import Testimonials from './pages/Testimonials';
import PricingTable from './pages/PricingTable';
import Typography from './pages/Typography';
import Contact from './pages/Contact';
import ErrorPage from './pages/404';
import ComingSoon from './pages/ComingSoon';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';

// Css Import
import './assets/scss/app.scss';
// import PageOne from './pages/servicePages/PageOne';
import CitiesWeAre from './pages/CitiesWeAre';
import CitiesWeAreDetails from './pages/CitiesWeAreDetails';
import AboutTab from './component/tabs/AboutTab';

//Admin
import './component/admin/admin';
// import AdminHome from './component/admin/admin';
import OurProducts from './pages/OurProducts';
import Industries from './pages/Industries';
import IndustriesDetails from './pages/IndustriesDetails';
import HrAndPayroll from './pages/productPages/HrAndPayroll';
import JewellerySoftware from './pages/productPages/JewellerySoftware';
import InventorySoftware from './pages/productPages/InventorySoftware';
import SchoolSoftware from './pages/productPages/SchoolSoftware';
import Clients from './pages/Clients';
import SeoCompanies from './pages/companies/SeoCompanies';
import SeoCompaniesDetails from './pages/companies/SeoCompaniesDetails';
import Delhi from './pages/cities/Delhi';
import Bangalore from './pages/cities/Bangalore';
import Pune from './pages/cities/Pune';
import Kolkata from './pages/cities/Kolkata';
import Chennai from './pages/cities/Chennai';
import Mumbai from './pages/cities/Mumbai';
import Hyderabad from './pages/cities/Hyderabad';
import SeoCompanyInBangalore from './pages/companies/SeoCompanyInDelhi';
import SeoCompanyInDelhi from './pages/companies/SeoCompanyInDelhi';
import SeoCompanyInChennai from './pages/companies/SeoCompanyInChennai';
import SeoCompanyInHyderabad from './pages/companies/SeoCompanyInHyderabad';
import SeoCompanyInKolkata from './pages/companies/SeoCompanyInKolkata';
import SeoCompanyInMumbai from './pages/companies/SeoCompanyInMumbai';
import SeoCompanyInPune from './pages/companies/SeoCompanyInPune';
import News from './pages/News';
import Whatsapp from './common/Whatsapp';
import SalesIQ from './common/ZohoSales';

import BasicMasonry from './elements/ClientScroll';
import Banner from './elements/BannerSlider';
import Aviaton from './pages/aviation/Aviaton';
import PressRelease from './pages/pressRelease/PressRelease';

import EcommerecLandingPage from './pages/langing-pages/e-commerce/EcommerecLandingPage';
import TeamOverseas from './component/team/TeamOverseas';
import OverseasTeam from './pages/OverseasTeam';
import PageNotFound from './pages/PageNotFound';
import Error from './component/AdminBlogs/Constants/error';
import { AdminHome } from './pages/AdminHome';

// blogsroutes starts here

import { NewsAdd } from './pages/News-pages/NewsAdd'
import { TeamAdd } from './pages/Teams/TeamAdd'
import { TeamEdit } from './pages/Teams/TeamEdit'
import { TeamsHomePage } from './pages/Teams/TeamsHomePage'
import { NewsEdit } from './pages/News-pages/NewsEdit'
import { NewsHomePage } from './pages/News-pages/NewsHomePage'
import { FormPage } from './pages/Form/FormPage'
import { Login } from './component/AdminBlogs/Login'
import { AddBlog } from './pages/AddBlog'
import { EditBlog } from './pages/EditBlog'
import { AdminPortfolioAdd } from './pages/Portfolio/AdminPortfolioAdd'
import { AdminPortfolio } from './pages/Portfolio/AdminPortfolio'
import { AdminPortfolioEdit } from './pages/Portfolio/AdminPortfolioEdit'
import ProtectedAdminRoute from './Routes/ProtectedAdminRoute';
import Loading from './pages/loading';
import './css/style.css'
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';


// Admin Panel Components
const Blog = React.lazy(() => import('./component/AdminBlogs/blog'));
// blogsroutes ends here




const LazyBlogContent = lazy(() => import('./pages/BlogGrid'));

const App = () => {
  const helmetContext = {}
  return (
    <HelmetProvider context={helmetContext}>

      <Router  >

        <ScrollToTop>
          <ToastContainer />
          <Routes>

            {/* blogs start here */}


            <Route path="*" element={<Error />} />
            <Route path='/admin/login' exact element={<Login />} />
            <Route
              path="/admin"
              exact
              element={
                <React.Suspense fallback=<Loading />>
                  <ProtectedAdminRoute>
                    <AdminHome />
                  </ProtectedAdminRoute>
                </React.Suspense>
              }
            />
            <Route
              path="/admin/portfolio"
              exact
              element={
                <React.Suspense fallback=<Loading />>
                  <ProtectedAdminRoute>
                    <AdminPortfolio />
                  </ProtectedAdminRoute>
                </React.Suspense>
              }
            />
            <Route
              path="/admin/team"
              exact
              element={
                <React.Suspense fallback=<Loading />>
                  <ProtectedAdminRoute>
                    <TeamsHomePage />
                  </ProtectedAdminRoute>
                </React.Suspense>
              }
            />
            <Route
              path="/admin/news"
              exact
              element={
                <React.Suspense fallback=<Loading />>
                  <ProtectedAdminRoute>
                    <NewsHomePage />
                  </ProtectedAdminRoute>
                </React.Suspense>
              }
            />
            <Route
              path="/admin/form"
              exact
              element={
                <React.Suspense fallback=<Loading />>
                  <ProtectedAdminRoute>
                    <FormPage />
                  </ProtectedAdminRoute>
                </React.Suspense>
              }
            />
            <Route
              path="/admin/:publish"
              exact
              element={
                <React.Suspense fallback=<Loading />>
                  <ProtectedAdminRoute>
                    <Blog />
                  </ProtectedAdminRoute>
                </React.Suspense>
              }
            />
            <Route
              path="/admin/portfolio/edit/:id"
              exact
              element={
                <React.Suspense fallback=<Loading />>
                  <ProtectedAdminRoute>
                    <AdminPortfolioEdit />
                  </ProtectedAdminRoute>
                </React.Suspense>
              }
            />
            <Route
              path="/admin/team/edit/:id"
              exact
              element={
                <React.Suspense fallback=<Loading />>
                  <ProtectedAdminRoute>
                    <TeamEdit />
                  </ProtectedAdminRoute>
                </React.Suspense>
              }
            />
            <Route
              path="/admin/news/edit/:id"
              exact
              element={
                <React.Suspense fallback=<Loading />>
                  <ProtectedAdminRoute>
                    <NewsEdit />
                  </ProtectedAdminRoute>
                </React.Suspense>
              }
            />
            <Route
              path="/admin/blog/edit/:id"
              exact
              element={
                <React.Suspense fallback=<Loading />>
                  <ProtectedAdminRoute>
                    <EditBlog />
                  </ProtectedAdminRoute>
                </React.Suspense>
              }
            />
            <Route
              path="/admin/compose"
              exact
              element={
                <React.Suspense fallback=<Loading />>
                  <ProtectedAdminRoute>
                    <AddBlog />
                  </ProtectedAdminRoute>
                </React.Suspense>
              }
            />
            <Route
              path="/admin/portfolio/add"
              exact
              element={
                <React.Suspense fallback=<Loading />>
                  <ProtectedAdminRoute>
                    <AdminPortfolioAdd />
                  </ProtectedAdminRoute>
                </React.Suspense>
              }
            />
            <Route
              path="/admin/team/add"
              exact
              element={
                <React.Suspense fallback=<Loading />>
                  <ProtectedAdminRoute>
                    <TeamAdd />
                  </ProtectedAdminRoute>
                </React.Suspense>
              }
            />
            <Route
              path="/admin/news/add"
              exact
              element={
                <React.Suspense fallback=<Loading />>
                  <ProtectedAdminRoute>
                    <NewsAdd />
                  </ProtectedAdminRoute>
                </React.Suspense>
              }
            />


            {/* blogs ends here */}
            <Route
              path={process.env.PUBLIC_URL + '/'}
              element={<DigitalAgency />}
            />
            {/* <Route
            path={process.env.PUBLIC_URL + '/page-one'}
            element={<PageOne />}
          /> */}

            <Route
              path={process.env.PUBLIC_URL + '/digital-agency'}
              element={<DigitalAgency />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/creative-agency'}
              element={<CreativeAgency />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/personal-portfolio'}
              element={<PersonalPortfolio />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/home-startup'}
              element={<HomeStartup />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/corporate-agency'}
              element={<CorporateAgency />}
            />

            {/* Blogs */}
            <Route
              path={process.env.PUBLIC_URL + '/blog/'}
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <LazyBlogContent />
                </Suspense>
              }
            />

            <Route
              path={process.env.PUBLIC_URL + '/news/'}
              element={<News />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/category/:slug'}
              element={<BlogCategory />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/archive/:slug'}
              element={<BlogArchive />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/blog/:slug/'}
              element={<BlogDetails />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/clients/'}
              element={<Clients />}
            />

            {/* Service */}
            <Route
              path={process.env.PUBLIC_URL + '/services/'}
              element={<ServiceOne />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/services-two/'}
              element={<ServiceTwo />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/products/'}
              element={<OurProducts />}
            />
            {<Route
              path={process.env.PUBLIC_URL + '/:slug/'}
              element={<ServiceDetails />}
            />}

            {/* <Route
             <Route
            path={process.env.PUBLIC_URL + '/our-products/:slug/'}
            element={<ProductDetails />}
          /> */}
            <Route
              path={process.env.PUBLIC_URL + 'products/hr-and-payroll-management-software'}
              element={<HrAndPayroll />}
            />
            <Route
              path={process.env.PUBLIC_URL + 'products/jewellery-software'}
              element={<JewellerySoftware />}
            />
            <Route
              path={process.env.PUBLIC_URL + 'products/inventory-management-system'}
              element={<InventorySoftware />}
            />
            <Route
              path={process.env.PUBLIC_URL + 'products/school-management-system'}
              element={<SchoolSoftware />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/industries/'}
              element={<Industries />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/industries/:slug/'}
              element={<IndustriesDetails />}
            />


            {/* Project  */}
            <Route
              path={process.env.PUBLIC_URL + '/project-grid-one/'}
              element={<ProjectGridOne />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/project-grid-two/'}
              element={<ProjectGridTwo />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/portfolio/'}
              element={<ProjectGridThree />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/project-width-one/'}
              element={<ProjectGridFour />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/project-width-two/'}
              element={<ProjectGridFive />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/portfolio/:slug/'}
              element={<ProjectDetails />}
            />

            {/* Pages  */}
            <Route
              path={process.env.PUBLIC_URL + '/about-us/'}
              element={<AboutUs />}
            />
            {/* <Route
            path={process.env.PUBLIC_URL + '/tab/'}
            element={<AboutTab />}
          /> */}
            <Route
              path={process.env.PUBLIC_URL + '/cities-we-are/'}
              element={<CitiesWeAre />}
            />
            {/* {    <Route
            path={process.env.PUBLIC_URL + '/:slug/'}
            element={<CitiesWeAreDetails />}
          />} */}
            <Route
              path={process.env.PUBLIC_URL + '/our-office/'}
              element={<OurOffice />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/our-clients/'}
              element={<OurClients />}
            />
            <Route path={process.env.PUBLIC_URL + '/team/'} element={<Team />} />
            <Route path={process.env.PUBLIC_URL + '/overseas-team/'} element={<OverseasTeam />} />
            <Route
              path={process.env.PUBLIC_URL + '/team-details/:slug/'}
              element={<TeamDetails />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/case-studies/'}
              element={<CaseStudy />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/case-details/:slug/'}
              element={<CaseDetails />}
            />
            {/* <Route
            path={process.env.PUBLIC_URL + '/seo-companies/'}
            element={<SeoCompanies />}
          /> */}
            {/* <Route
            path={process.env.PUBLIC_URL + '/:slug/'}
            element={<SeoCompaniesDetails />}
          /> */}
            <Route
              path={process.env.PUBLIC_URL + '/testimonials/'}
              element={<Testimonials />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/pricing-table/'}
              element={<PricingTable />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/typography/'}
              element={<Typography />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/contact-us/'}
              element={<Contact />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/404'}
              element={<ErrorPage />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/coming-soon'}
              element={<ComingSoon />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/services/coming-soon'}
              element={<ComingSoon />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/privacy-policy'}
              element={<PrivacyPolicy />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/terms-and-conditions'}
              element={<TermsOfUse />}
            />
            {/* <Route
            path={process.env.PUBLIC_URL + '/terms-use'}
            element={<TermsOfUse />}
          /> */}
            <Route path={process.env.PUBLIC_URL + '/*'} element={<ErrorPage />} />

            {/* Admin */}
            <Route
              path={process.env.PUBLIC_URL + '/admin-panel/'}
              element={<AdminHome />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/digital-marketing-agency-in-delhi/'}
              element={<Delhi />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/digital-marketing-agency-in-bangalore/'}
              element={<Bangalore />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/digital-marketing-agency-in-pune/'}
              element={<Pune />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/digital-marketing-agency-in-kolkata/'}
              element={<Kolkata />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/digital-marketing-agency-in-chennai/'}
              element={<Chennai />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/digital-marketing-agency-in-mumbai/'}
              element={<Mumbai />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/digital-marketing-agency-in-hyderabad/'}
              element={<Hyderabad />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/seo-company-in-chennai'}
              element={<SeoCompanyInChennai />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/seo-company-in-hyderabad/'}
              element={<SeoCompanyInHyderabad />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/seo-company-in-delhi/'}
              element={<SeoCompanyInDelhi />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/seo-company-in-kolkata/'}
              element={<SeoCompanyInKolkata />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/seo-company-in-mumbai/'}
              element={<SeoCompanyInMumbai />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/seo-company-in-pune/'}
              element={<SeoCompanyInPune />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/patners/'}
              element={<BasicMasonry />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/avaiation/'}
              element={<Aviaton />}
            />

            <Route
              path={process.env.PUBLIC_URL + '/pr-services-in-bangalore/'}
              element={<PressRelease />}
            />


            {/* landing pages routes   */}
            <Route
              path={process.env.PUBLIC_URL + '/e-commerce-product/'}
              element={<EcommerecLandingPage />}
            />
            {/* landing pages routes   */}
            <Route
              path='*'
              element={<PageNotFound />}
            />
          </Routes>
        </ScrollToTop>
        <Whatsapp />
        {/* <SalesIQ/> */}
      </Router>
    </HelmetProvider>
  );
};

export default App;
