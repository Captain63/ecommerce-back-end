// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Category.hasMany(Product, {
  foreignKey: "category_id"
})

Product.belongsTo(Category, {
  foreignKey: "category_id"
})

Product.belongsToMany(Tag, {
  through: {
    model: ProductTag
  },
  as: "product_tags"
})

Tag.belongsToMany(Product, {
  through: {
    model: ProductTag
  },
  as: "product_tags"
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
