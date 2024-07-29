<script>
    import ProductCard from './ProductCard.svelte';
    import { products, loading } from '../Store/productStore'; 
  
    let items = [];
    $: if (!loading) {
      items = $products;
    }
  </script>
  
  {#if loading}
    <ProductSkeleton />
  {:else}
    {#each items as product (product.id)}
      <ProductCard
        {product.id}
        {product.title}
        {product.image}
        {product.price}
        {product.rating}
        {product.category}
      />
    {/each}
  {/if}
  
  <style>
    
  </style>
  