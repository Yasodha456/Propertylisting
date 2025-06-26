const Property = require("../Models/Property");

exports.createProperty = async (req, res) => {
  try {
    const newProperty = new Property(req.body);
    await newProperty.save();
    res.status(201).json(newProperty);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getProperties = async (req, res) => {
  try {
    const { page = 1, limit = 6, sortBy = "createdAt" } = req.query;
    const sortOptions = {
      createdAt: -1,
      rentAsc: { rent: 1 },
      rentDesc: { rent: -1 },
      views: { views: -1 },
    };
    const sort = sortBy === "rentAsc" ? sortOptions.rentAsc :
                 sortBy === "rentDesc" ? sortOptions.rentDesc :
                 sortBy === "views" ? sortOptions.views : sortOptions.createdAt;

    const properties = await Property.find()
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    res.json(properties);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) return res.status(404).json({ message: "Property not found" });

    property.views++;
    await property.save();
    res.json(property);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};