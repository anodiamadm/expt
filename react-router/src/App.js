import {  createBrowserRouter,
          Route,
          createRoutesFromElements,
          RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import RootLayout from "./Layout/RootLayout";
import HelpLayout from "./Layout/HelpLayout";
import Faq from './components/help/Faq';
import Contact from './components/help/Contact';
import NotFound from "./components/NotFound";
import Careers, { careerLoader } from "./components/careers/Careers";
import CareersLayout from "./Layout/CareersLayout";
import CareerDetails, { careerDetailsLoader } from "./components/careers/CareerDetails";
import CareersError from "./components/careers/CareersError";

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} />
      </Route>
      <Route path='careers' element={<CareersLayout/>} errorElement={<CareersError />}>
        <Route 
          index 
          element={<Careers />} 
          loader={careerLoader}
        />
        <Route 
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
          
        />

        
      </Route>
      <Route path='*' element={<NotFound/>} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />    
  );
}

export default App
