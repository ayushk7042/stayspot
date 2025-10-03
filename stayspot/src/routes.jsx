
// // import React from "react";
// // import { Routes, Route, Navigate } from "react-router-dom";

// // import Header from "./components/Header.jsx";
// // import Footer from "./components/Footer.jsx";

// // import Home from "./pages/Home.jsx";
// // import Category from "./pages/Category.jsx";
// // import Article from "./pages/Article.jsx";
// // import Search from "./pages/Search.jsx";
// // import AllPosts from "./pages/AllPosts.jsx";
// // import About from "./pages/About.jsx";
// // import Contact from "./pages/Contact.jsx";

// // import Newsletter from "./pages/Newsletter.jsx";
// // import Languages from "./pages/Languages.jsx";
// // import Authors from "./pages/Authors.jsx";
// // import EmissionsMap from "./pages/EmissionsMap.jsx";
// // import GreenTips from "./pages/GreenTips.jsx";
// // import MarketTrends from "./pages/MarketTrends.jsx";
// // import Community from "./pages/Community.jsx";
// // import Performance from "./pages/Performance.jsx";
// // import Sustainability from "./pages/Sustainability.jsx";
// // import AiInsights from "./pages/AiInsights.jsx";
// // import LocalImpact from "./pages/LocalImpact.jsx";
// // import EcoChallenges from "./pages/EcoChallenges.jsx";

// // import AdminLogin from "./pages/AdminLogin.jsx";
// // import AdminDashboard from "./pages/AdminDashboard.jsx";
// // import PostManager from "./components/PostManager.jsx";
// // import ProtectedRoute from "./components/ProtectedRoute.jsx";
// // import PostDetails from "./pages/PostDetails.jsx";
// // import Services from "./pages/Services.jsx";
// // import Blog from "./pages/Blog.jsx";
// // const RoutesConfig = () => (
// //   <div className="app">
// //     <Header />
// //     <main id="main" className="main">
// //       <Routes>
// //         {/* Public site routes */}
// //         <Route path="/" element={<Home />} />
// //         <Route path="/posts" element={<AllPosts />} />
// //         <Route path="/category/:slug" element={<Category />} />
// //         <Route path="/article/:slug" element={<Article />} />
// //         <Route path="/search" element={<Search />} />
// //         <Route path="/about" element={<About />} />
// //         <Route path="/contact" element={<Contact />} />


// //  {/* Blog page accessible at /blog */}
// //         <Route path="/blog" element={<Blog />} />

// //         {/* Services page accessible at /services */}
// //         <Route path="/services" element={<Services />} />
// // <Route path="/posts/:slug" element={<PostDetails />} />

// //         <Route path="/newsletter" element={<Newsletter />} />
// //         <Route path="/languages" element={<Languages />} />
// //         <Route path="/authors" element={<Authors />} />
// //         <Route path="/emissions-map" element={<EmissionsMap />} />
// //         <Route path="/green-tips" element={<GreenTips />} />
// //         <Route path="/market-trends" element={<MarketTrends />} />
// //         <Route path="/community" element={<Community />} />
// //         <Route path="/performance" element={<Performance />} />
// //         <Route path="/sustainability" element={<Sustainability />} />
// //         <Route path="/ai-insights" element={<AiInsights />} />
// //         <Route path="/local-impact" element={<LocalImpact />} />
// //         <Route path="/eco-challenges" element={<EcoChallenges />} />

// //         {/* Admin routes */}
// //         <Route path="/admin/login" element={<AdminLogin />} />

// //         {/* Redirect root /admin to login */}
// //         <Route path="/admin" element={<Navigate to="/admin/login" replace />} />

// //         <Route
// //           path="/admin/dashboard"
// //           element={
// //             <ProtectedRoute>
// //               <AdminDashboard />
// //             </ProtectedRoute>
// //           }
// //         />
// //         <Route
// //           path="/admin/posts"
// //           element={
// //             <ProtectedRoute>
// //               <PostManager />
// //             </ProtectedRoute>
// //           }
// //         />

// //         {/* Fallback route for unknown paths - optional */}
// //         {/* <Route path="*" element={<NotFoundPage />} /> */}
// //       </Routes>
// //     </main>
// //     <Footer />
// //   </div>
// // );

// // export default RoutesConfig;






// // RoutesConfig.jsx
// import React, { Suspense, lazy } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";

// import Header from "./components/Header.jsx";
// import Footer from "./components/Footer.jsx";
// import ProtectedRoute from "./components/ProtectedRoute.jsx";
// import ErrorBoundary from "./components/ErrorBoundary.jsx";

// // Lazy loaded pages
// const Home = lazy(() => import("./pages/Home.jsx"));
// const Category = lazy(() => import("./pages/Category.jsx"));
// const Article = lazy(() => import("./pages/Article.jsx"));
// const Search = lazy(() => import("./pages/Search.jsx"));
// const AllPosts = lazy(() => import("./pages/AllPosts.jsx"));
// const About = lazy(() => import("./pages/About.jsx"));
// const Contact = lazy(() => import("./pages/Contact.jsx"));
// const Blog = lazy(() => import("./pages/Blog.jsx"));
// const Services = lazy(() => import("./pages/Services.jsx"));
// const PostDetails = lazy(() => import("./pages/PostDetails.jsx"));
// const Newsletter = lazy(() => import("./pages/Newsletter.jsx"));
// const Languages = lazy(() => import("./pages/Languages.jsx"));
// const Authors = lazy(() => import("./pages/Authors.jsx"));
// const EmissionsMap = lazy(() => import("./pages/EmissionsMap.jsx"));
// const GreenTips = lazy(() => import("./pages/GreenTips.jsx"));
// const MarketTrends = lazy(() => import("./pages/MarketTrends.jsx"));
// const Community = lazy(() => import("./pages/Community.jsx"));
// const Performance = lazy(() => import("./pages/Performance.jsx"));
// const Sustainability = lazy(() => import("./pages/Sustainability.jsx"));
// const AiInsights = lazy(() => import("./pages/AiInsights.jsx"));
// const LocalImpact = lazy(() => import("./pages/LocalImpact.jsx"));
// const EcoChallenges = lazy(() => import("./pages/EcoChallenges.jsx"));

// const AdminLogin = lazy(() => import("./pages/AdminLogin.jsx"));
// const AdminDashboard = lazy(() => import("./pages/AdminDashboard.jsx"));
// const PostManager = lazy(() => import("./components/PostManager.jsx"));

// const NotFoundPage = () => (
//   <div style={{ textAlign: "center", padding: 40 }}>
//     <h1>404 - Page Not Found</h1>
//     <p>The requested page does not exist.</p>
//   </div>
// );


// const RoutesConfig = () => (
//   <div className="app">
//     <Header />
//     <main id="main" className="main">
//       <Suspense fallback={<div style={{ padding: 40, textAlign: "center" }}>Loading page...</div>}>
//         <Routes>
//           {/* Public site routes */}
//           <Route path="/" element={<Home />} />
//           <Route path="/posts" element={<AllPosts />} />
//           <Route path="/category/:slug" element={<Category />} />

//           {/* Wrapped with ErrorBoundary */}
//           <Route
//             path="/article/:slug"
//             element={
//               <ErrorBoundary>
//                 <Article />
//               </ErrorBoundary>
//             }
//           />
//           <Route
//             path="/posts/:slug"
//             element={
//               <ErrorBoundary>
//                 <PostDetails />
//               </ErrorBoundary>
//             }
//           />

//           <Route path="/search" element={<Search />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />

//           <Route path="/blog" element={<Blog />} />
//           <Route path="/services" element={<Services />} />

//           <Route path="/newsletter" element={<Newsletter />} />
//           <Route path="/languages" element={<Languages />} />
//           <Route path="/authors" element={<Authors />} />
//           <Route path="/emissions-map" element={<EmissionsMap />} />
//           <Route path="/green-tips" element={<GreenTips />} />
//           <Route path="/market-trends" element={<MarketTrends />} />
//           <Route path="/community" element={<Community />} />
//           <Route path="/performance" element={<Performance />} />
//           <Route path="/sustainability" element={<Sustainability />} />
//           <Route path="/ai-insights" element={<AiInsights />} />
//           <Route path="/local-impact" element={<LocalImpact />} />
//           <Route path="/eco-challenges" element={<EcoChallenges />} />

//           {/* Admin routes */}
//           <Route path="/admin/login" element={<AdminLogin />} />
//           <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
//           <Route
//             path="/admin/dashboard"
//             element={
//               <ProtectedRoute>
//                 <AdminDashboard />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/admin/posts"
//             element={
//               <ProtectedRoute>
//                 <PostManager />
//               </ProtectedRoute>
//             }
//           />

//           {/* 404 Not Found fallback */}
//           <Route path="*" element={<NotFoundPage />} />
//         </Routes>
//       </Suspense>
//     </main>
//     <Footer />
//   </div>
// );

// export default RoutesConfig;



// RoutesConfig.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import ManagePosts from "./pages/ManagePosts";
import CreatePost from "./pages/CreatePost";
// Lazy loaded pages
const Home = lazy(() => import("./pages/Home.jsx"));
const Category = lazy(() => import("./pages/Category.jsx"));
const PostDetails = lazy(() => import("./pages/PostDetails.jsx"));
const Search = lazy(() => import("./pages/Search.jsx"));
const AllPosts = lazy(() => import("./pages/AllPosts.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Blog = lazy(() => import("./pages/Blog.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
// Other lazy loaded pages...

const AdminLogin = lazy(() => import("./pages/AdminLogin.jsx"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard.jsx"));
const PostManager = lazy(() => import("./components/PostManager.jsx"));

const NotFoundPage = () => (
  <div style={{ textAlign: "center", padding: 40 }}>
    <h1>404 - Page Not Found</h1>
    <p>The requested page does not exist.</p>
  </div>
);

const RoutesConfig = () => (
  <div className="app">
    <Header />
    <main id="main" className="main">
      <Suspense fallback={<div style={{ padding: 40, textAlign: "center" }}>Loading page...</div>}>
        <Routes>
          {/* Public site routes */}
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<AllPosts />} />
          <Route path="/category/:slug" element={<Category />} />
<Route path="/create-post" element={<CreatePost />} />
 <Route path="/manage-posts" element={<ManagePosts />} />
          {/* Article detail route updated to /post/:slug
          <Route
            path="/post/:slug"
            element={
              <ErrorBoundary>
                <PostDetails />
              </ErrorBoundary>
            } */}
          {/* <Route path="/post/:slug" element={<PostDetails />} /> */}
<Route
  path="/post/:slug"
  element={
    <ErrorBoundary>
      <PostDetails />
    </ErrorBoundary>
  }
/>


          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />

          {/* Admin routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/posts"
            element={
              <ProtectedRoute>
                <PostManager />
              </ProtectedRoute>
            }
          />

          {/* 404 Not Found fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </main>
    <Footer />
  </div>
);

export default RoutesConfig;
