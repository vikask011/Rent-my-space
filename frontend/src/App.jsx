import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Body from './components/Body';
import Cards from './components/Cards';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Signin from './components/Signin';
import Signup from './components/Signup';
import AllCategories from './components/AllCategories';
import DetailsPage from './components/DetailsPage';
import Kitchen from './components/Kitchen';
import StudyRoom from './components/StudyRoom';
import OfficeSpace from './components/OfficeSpace';
import ArtStudio from './components/ArtStudio';
import MeetingRoom from './components/MeetingRoom';
import Garage from './components/Garage';
import Profile from './components/Profile';
import AdminPage from './components/AdminPage';
import ContactPage from './components/Contact';
import Aboutpage from './components/Aboutus';
import AddListing from './components/AddListing';
import ViewListing from './components/ViewListing';
import BookedSlots from './components/BookedSlots';
import ProtectedRoute from './components/ProtectedRoute';

const HomePage = () => (
  <>
    <Body />
    <Cards />
    <Banner />
  </>
);

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/categories" element={<AllCategories />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/studyroom" element={<StudyRoom />} />
          <Route path="/officespace" element={<OfficeSpace />} />
          <Route path="/artstudio" element={<ArtStudio />} />
          <Route path="/meetingroom" element={<MeetingRoom />} />
          <Route path="/garage" element={<Garage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<Aboutpage />} />

          
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              
                <AdminPage />
              
            }
          />
          <Route
            path="/addlisting"
            element={
              
                <AddListing />
              
            }
          />
          <Route
            path="/viewlisting"
            element={
              
                <ViewListing />
              
            }
          />
          <Route
            path="/bookedslots"
            element={
              
                <BookedSlots />
             
            }
          />
        </Routes>
      </main>

      <Footer />
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default App;
