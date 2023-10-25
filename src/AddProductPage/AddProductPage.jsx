import React, { useState } from 'react';

const AddProductPage = () => {
  const [product, setProduct] = useState({
    image: '',
    name: '',
    brandName: '',
    type: '',
    price: 0,
    description: '',
    rating: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleAddProduct = () => {
    // Implement the logic to add the product to your data store or API here
    console.log('Product:', product);
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form>
        <label>Image:</label>
        <input type="text" name="image" onChange={handleInputChange} /> <br />

        <label>Name:</label>
        <input type="text" name="name" onChange={handleInputChange} /><br />

        <label>Brand Name:</label>
        <input type="text" name="brandName" onChange={handleInputChange} /> <br />

        <label>Type:</label> <br />
        <select name="type" onChange={handleInputChange}>
          <option value="phone">Phone</option> 
          <option value="computer">Computer</option>
          <option value="headphone">Headphone</option>
        </select> <br />

        <label>Price:</label> <br />
        <input type="number" name="price" onChange={handleInputChange} /> <br />

        <label>Short Description:</label> <br />
        <input type="text" name="description" onChange={handleInputChange} /> <br />

        <label>Rating:</label> <br />
        <input type="number" name="rating" onChange={handleInputChange} /> <br />

        <button type="button" onClick={handleAddProduct}>Add</button> <br />
      </form>
    </div>
  );
};

export default AddProductPage;
