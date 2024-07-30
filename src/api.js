// src/api.js

/**
 * Fetches detailed information for a single product by its ID.
 * @param {number} id - The ID of the product to fetch.
 * @returns {Promise<Object>} - A promise that resolves to the product data.
 * @throws {Error} - Throws an error if the fetch fails.
 */
export async function getProductById(id) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    return await response.json();
  }
  