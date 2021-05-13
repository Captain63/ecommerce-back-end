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
  through: "product_tag",
  foreignKey: "product_id",
  as: "tags"
})

Tag.belongsToMany(Product, {
  through: "product_tag",
  foreignKey: "tag_id",
  as: "products"
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
