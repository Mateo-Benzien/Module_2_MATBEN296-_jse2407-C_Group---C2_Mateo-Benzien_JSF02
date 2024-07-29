import { writable, get } from 'svelte/store';

const products = writable([]);
const originalProducts = writable([]);
const loading = writable(false);
const error = writable(null);
const sorting = writable('default');
const searchTerm = writable('');
const filterItem = writable('');

// Trigger functions to ensure products are displayed correctly
const setSorting = (newSorting) => {
  sorting.set(newSorting);
  sortProducts();
};

const setSearchTerm = (newSearchTerm) => {
  searchTerm.set(newSearchTerm);
  searchProducts();
};

const setFilterItem = (newCategory) => {
  filterItem.set(newCategory);
  fetchProducts();
};

// Fetch products from the API based on category
const fetchProducts = async () => {
  loading.set(true);
  error.set(null);
  const category = get(filterItem);

  try {
    const response = await fetch(
      category ? `https://fakestoreapi.com/products/category/${category}` : 'https://fakestoreapi.com/products'
    );

    if (!response.ok) {
      throw new Error('Data fetching failed, please check your network connection');
    }

    const data = await response.json();
    products.set(data);
    originalProducts.set(data);

    // Ensure products are sorted and searched after fetching
    sortProducts();
    searchProducts();
  } catch (err) {
    error.set(err.message);
  } finally {
    loading.set(false);
  }
};

// Sort products based on the selected sorting order
const sortProducts = () => {
  const currentProducts = get(products);
  const sortOrder = get(sorting);
  const sortedProducts = [...currentProducts];

  if (sortOrder === 'low') {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'high') {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else {
    // Default sorting: show original products
    products.set(get(originalProducts));
    return;
  }

  products.set(sortedProducts);
};

// Search products based on the search term
const searchProducts = () => {
  const currentSearchTerm = get(searchTerm).trim().toLowerCase();
  if (currentSearchTerm === '') {
    products.set(get(originalProducts));
    return;
  }

  const filteredProducts = get(originalProducts).filter((product) =>
    product.title.toLowerCase().includes(currentSearchTerm)
  );

  products.set(filteredProducts);
};

// Fetch initial products
fetchProducts();

export {
  products,
  originalProducts,
  loading,
  error,
  sorting,
  searchTerm,
  filterItem,
  setSorting,
  setSearchTerm,
  setFilterItem,
  fetchProducts,
  sortProducts,
  searchProducts
};
