<script>
  import ProductCard from './ProductCard.svelte';
  import { products, error, loading } from '../Store/productStore';
  import { onMount } from 'svelte';

  let productList = [];
  let fetchError = '';
  let isLoading = true;

  onMount(() => {
    // Subscribe to the products store to get the product list
    const unsubscribeProducts = products.subscribe(value => {
      productList = value;
    });

    // Subscribe to the error store to get any fetch errors
    const unsubscribeError = error.subscribe(err => {
      fetchError = err;
    });

    // Subscribe to the loading store to handle the loading state
    const unsubscribeLoading = loading.subscribe(load => {
      isLoading = load;
    });

    // Cleanup subscriptions when the component is destroyed
    return () => {
      unsubscribeProducts();
      unsubscribeError();
      unsubscribeLoading();
    };
  });

  const handleNavigate = (event) => {
    // Handle navigation to product detail page
    console.log('Navigate to product:', event.detail.id);
  };
</script>

{#if isLoading}
  <p>Loading...</p>
{:else if fetchError}
  <p>Error: {fetchError}</p>
{:else}
  <div class="product-list-container">
    <div class="product-list">
      {#each productList as product}
        <ProductCard {product} on:navigate={handleNavigate} />
      {/each}
    </div>
  </div>
{/if}

<style>
  .product-list-container {
    padding: 1rem;
  }

  .product-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
</style>
