<script>
  import { onMount } from 'svelte';
  import ProductList from '../Product/ProductList.svelte';
  import { products } from '../Store/productStore';

  let loading = true;
  let loadError = null;

  onMount(async () => {
    try {
      await loadProducts();
    } catch (err) {
      loadError = err;
    } finally {
      loading = false;
    }
  });

  async function loadProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const productData = await response.json();
    products.set(productData);
  }
</script>

<main>
  {#if loading}
    <p>Loading...</p>
  {:else if loadError}
    <p>Error loading products: {loadError.message}</p>
  {:else}
    <ProductList />
  {/if}
</main>

<style>
  main {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
  }
  
  p {
    font-size: 1.2rem;
    color: #e53935; /* Red color for errors */
    text-align: center;
  }
</style>
