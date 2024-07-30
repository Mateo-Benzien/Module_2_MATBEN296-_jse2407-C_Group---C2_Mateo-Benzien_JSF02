<script>
  import ProductCard from './ProductCard.svelte';
  import { products, error, loading } from '../Store/productStore';
  import { get } from 'svelte/store';
  import { onMount } from 'svelte';
  
  let productList = [];
  let fetchError = '';
  let isLoading = true;
  
  onMount(() => {
    products.subscribe(value => {
      productList = value;
    });
    
    error.subscribe(err => {
      fetchError = err;
    });
    
    loading.subscribe(load => {
      isLoading = load;
    });
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
  .product-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
</style>
