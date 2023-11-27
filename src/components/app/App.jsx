// import '../../styles/style.scss';
// import React, { useEffect, useState } from 'react';
// import Preloader from '@/components/UI/Preloader/Preloader.jsx';
// import { Routes, Route } from 'react-router-dom';
// import Layout from '@/components/Layout.jsx';
// import HomePage from '@/pages/HomePage.jsx';
// import AboutMePage from '@/pages/AboutMePage.jsx';
//
// const App = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   //note loader timer
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);
//
//     return () => clearTimeout(timer);
//   }, []);
//
//   //note loader remove and animation
//
//   return (
//     <>
//       {isLoading && (
//         <div className={`preloader-container ${isLoading ? '' : 'fadeOut'}`}>
//           <Preloader />
//         </div>
//       )}
//       {!isLoading && (
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<HomePage />}></Route>
//             <Route path="about" element={<AboutMePage />}></Route>
//           </Route>
//         </Routes>
//       )}
//     </>
//   );
// };
//
// export default App;

import '../../styles/style.scss';
import React, { Suspense } from 'react';
import Preloader from '@/components/UI/Preloader/Preloader.jsx';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout.jsx';
import ScrollToTop from '../../utils/scrollToTop.js';

const HomePage = React.lazy(() => import('../../pages/HomePage.jsx'));
const AboutMePage = React.lazy(() => import('../../pages/AboutMePage.jsx'));

const App = () => {
  return (
    <Suspense
      fallback={
        <div className={`preloader-container fadeOut`}>
          <Preloader />
        </div>
      }
    >
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="about" element={<AboutMePage />}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
