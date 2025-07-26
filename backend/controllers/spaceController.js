import Space from '../models/Space.js';

// Add new listing
export const addListing = async (req, res) => {
  try {
    const { title, price, description, category } = req.body;
    const imageUrl = req.file.path;

    const newSpace = new Space({ title, price, description, category, imageUrl });
    await newSpace.save();

    res.status(201).json({ message: 'Listing created successfully', space: newSpace });
  } catch (error) {
    console.error('Error adding listing:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get all listings
export const getAllListings = async (req, res) => {
  try {
    const listings = await Space.find();
    res.json(listings);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch listings' });
  }
};

// Get listings by category
export const getListingsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const listings = await Space.find({ category });
    res.json(listings);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch by category' });
  }
};

// Delete listing
export const deleteListing = async (req, res) => {
  try {
    const { id } = req.params;
    await Space.findByIdAndDelete(id);
    res.json({ message: 'Listing deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete listing' });
  }
};

// ✅ Get listings grouped by category
export const getListingsGroupedByCategory = async (req, res) => {
  try {
    const listings = await Space.find();

    const grouped = listings.reduce((acc, listing) => {
      const category = listing.category || 'Uncategorized';
      if (!acc[category]) acc[category] = [];
      acc[category].push(listing);
      return acc;
    }, {});

    res.json(grouped);
  } catch (error) {
    res.status(500).json({ message: 'Failed to group listings by category' });
  }
};
