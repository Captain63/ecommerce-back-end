const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// Find all tags, include associated Product data through ProductTag table
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product, through: ProductTag, as: 'product_tags' }]
    })
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Find tag by its id, include 
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag, as: 'product_tags' }]
    })

    // If no data returned
    if (!tagData) {
      res.status(404).json({ message: "No tag found with that id" });

      // Halts executiion of following lines
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new tag
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    })

    // If no data returned
    if (!tagData) {
      res.status(404).json({ message: "No tag found with that id" });

      // Halts executiion of following lines
      return;
    }
  
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete tag based on its id
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    })

    // If no data returned
    if (!tagData) {
      res.status(404).json({ message: "No tag found with that id" });

      // Halts executiion of following lines
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
