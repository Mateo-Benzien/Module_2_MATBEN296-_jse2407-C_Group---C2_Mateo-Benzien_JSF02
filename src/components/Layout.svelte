<script>
    import { onMount } from 'svelte';
    import ProductList from '../Product/ProductList.svelte';
    import { products } from '../Store/productStore';
  
    let loading = true;
    let loadError = null;
  
    onMount(async () => {
      try {
        await loadProducts();
        loading = false;
      } catch (err) {
        loadError = err;
        loading = false;
      }
    });
  
    async function loadProducts() {
      const response = await fetch('https://fakestoreapi.com/products');
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
    }
  </style>
  