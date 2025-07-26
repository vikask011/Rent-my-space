import express from 'express';
import upload from '../middleware/upload.js';
import {
  addListing,
  getAllListings,
  getListingsByCategory,
  deleteListing,
  getListingsGroupedByCategory, // ✅ New import
} from '../controllers/spaceController.js';

const router = express.Router();

// Add Listing (with image)
router.post('/', upload.single('image'), addListing);

// Get All Listings
router.get('/', getAllListings);

// Get Listings by Category
router.get('/category/:category', getListingsByCategory);

// Delete Listing by ID
router.delete('/:id', deleteListing);

// ✅ New Route: Listings grouped by category
router.get('/grouped/categories', getListingsGroupedByCategory);

export default router;
