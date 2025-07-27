#  Rent My Space

**Rent My Space** is a full-stack space rental platform built with the **MERN stack** where users can discover and book various space types like kitchens, garages, study rooms, spare rooms, and office spaces. Admins can securely log in to manage listings. The platform also supports **Stripe payments** for seamless transactions.

> 🚀 **Live Site:** [https://rent-my-space-541k.vercel.app](https://rent-my-space-541k.vercel.app)

---

##  Features

###  User Features
- Browse and filter space listings (kitchens, garages, offices, etc.)
- View detailed space information with image, availability, and pricing
- Book available spaces with **Stripe-integrated payment**
- Fully responsive UI optimized for all devices

###  Admin Features
- Admin login system (using localStorage for frontend control)
- Add new rental listings with title, description, image, price, and type
- Upload space images via **Cloudinary**
- View all posted spaces for moderation or edits

---

##  Tech Stack

###  Frontend
- React.js (Vite setup)
- React Router DOM
- Tailwind CSS
- Axios
- Context API for global state management

### ⚙ Backend
- Node.js + Express.js
- MongoDB + Mongoose
- Stripe (Payment Integration)
- Cloudinary (Image Uploads)
- CORS, dotenv, and other utilities

---

##  Stripe Integration

- Stripe is used to securely handle payments.
- Users can book a space by clicking the **"Book Now"** button and completing a real-time transaction via the Stripe checkout page.
- Successful payments are recorded and acknowledged with a confirmation message.

---

## 🗄 MongoDB Database

- All user spaces are stored in MongoDB using **Mongoose models**.
- Collections include:
  - `Spaces`: Details of rental listings (title, type, price, image URL, availability)
  - `Users` (optional): If user registration is extended
  - `Bookings` 

---

##  Authentication (Admin)

- Admin login is checked using frontend logic with `localStorage` (`isAdminLoggedIn`).
- Admin dashboard is only accessible when logged in.
- Secure routes can be enhanced further using JWT tokens and password hashing (future upgrade).

---

## 📁 Project Structure

