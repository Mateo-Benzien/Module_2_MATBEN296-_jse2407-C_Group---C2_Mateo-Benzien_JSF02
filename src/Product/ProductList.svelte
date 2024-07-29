<script>
    import ProductCard from './ProductCard.svelte';
    import { products } from '../Store/productStore';
    import { get } from 'svelte/store';
    
    // Get the initial value of the products store
    let productList = get(products);
    
    // Subscribe to the products store to update productList whenever it changes
    products.subscribe(value => {
      productList = value;
    });
    
    const handleNavigate = (event) => {
      // Handle navigation to product detail page
      console.log('Navigate to product:', event.detail.id);
    };
  </script>
    
  <div class="product-list-container">
    <!-- Display the list of products -->
    <div class="product-list">
      {#each productList as product}
        <ProductCard {product} on:navigate={handleNavigate} />
      {/each}
    </div>
  </div>
    
  <style>
    .product-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 1rem;
    }
  </style>
  