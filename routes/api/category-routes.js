const router = require('express').Router();
const { Category, Product } = require('../../models');

// Find all categories, include associated products
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }]
    })
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Find one category by its `id` value, include associated products
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    })

    // If no data returned
    if (!categoryData) {
      res.status(404).json({ message: "No category found with that id" });

      // Halts executiion of following lines
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

 // Update a category by its `id` value
router.put('/:id', (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })

    // If no data returned
    if (!categoryData) {
      res.status(404).json({ message: "No category found with that id" });

      // Halts executiion of following lines
      return;
    }
  
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a category by its `id` value
router.delete('/:id', (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    })

    // If no data returned
    if (!categoryData) {
      res.status(404).json({ message: "No category found with that id" });

      // Halts executiion of following lines
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
