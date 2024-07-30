<!-- src/Pages/ProductDetailView.svelte -->

<script>
  import { onMount } from 'svelte';
  import { getProductById } from '../api'; // Adjust the path if necessary

  export let id;

  let title = '';
  let description = '';
  let image = '';
  let price = 0;
  let rating = 0;
  let category = '';
  let loading = true;
  let error = '';

  onMount(async () => {
    try {
      const product = await getProductById(id);
      title = product.title;
      description = product.description;
      image = product.image;
      price = product.price;
      rating = product.rating;
      category = product.category;
    } catch (err) {
      error = 'Failed to fetch product details.';
    } finally {
      loading = false;
    }
  });

  const handleBack = () => {
    window.history.back();
  };
</script>

{#if loading}
  <p>Loading...</p>
{:else if error}
  <p>{error}</p>
{:else}
  <div class="product-detail">
    <button on:click={handleBack}>Back to List</button>
    <h1>{title}</h1>
    <img src={image} alt={title} />
    <p>{description}</p>
    <p>Price: ${price}</p>
    <p>Category: {category}</p>
    <p>Rating: {rating}</p>
  </div>
{/if}

<style>
  .product-detail {
    padding: 1rem;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>
