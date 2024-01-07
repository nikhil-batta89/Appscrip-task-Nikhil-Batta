import React from 'react';
import axios from 'axios';
import styles from '../Products/Products.css';

const Products = ({ products }) => {
  return (
    <div className={styles.mainContainer}>
      <h1>Fake Store Products</h1>
      <div className={styles.productContainer}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    const products = response.data;

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error('Error fetching data from the API:', error.message);

    return {
      props: {
        products: [],
      },
    };
  }
}

export default Products;