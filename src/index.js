import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import PrivateLayout from './layout/PrivateLayout/PrivateLayout';
import Login from './Pages/auth/Login/Login';
import Register from './Pages/auth/Register/Register';
import PublicLayout from './layout/PublicLayout/PublicLayout';
import Home from './Pages/Home/Home';
import About from './Pages/Shared/About/About';
import StudentCard from './Pages/StudentCard/StudentCard';
import UploadImage from './Pages/Image/UploadImage';
import CVMaker from './Pages/CV/CVMaker';
import BasenessCard from './Pages/BasenessCard/BasenessCard';
import Contact from './Pages/Contact/Contact';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>

      {/* User routes start */}
      <Route index element={<Navigate to='/app' />} />
      <Route path='/app' element={<PrivateLayout />}>
        <Route index element={<Home />} />
        <Route path='studentCard' element={<StudentCard />} />
        <Route path='uploadImage' element={<UploadImage />} />
        <Route path='cvMaker' element={<CVMaker />} />
        <Route path='basenessCard' element={< BasenessCard />} />
        <Route path='contact' element={<  Contact />} />
        <Route path='about' element={<About />} />
        {/*  nested routes go here */}
      </Route>
      {/* User routes end */}

      {/* Auth routes start */}
      <Route path='/auth' element={< PublicLayout />}>
        <Route index element={<Navigate to={'/auth/login'} />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

      </Route>
      {/* Auth routes end */}

      {/* Not found route start */}
      <Route path='*' element={<Navigate to={'/'} />} />
      {/* Not found route end */}
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
