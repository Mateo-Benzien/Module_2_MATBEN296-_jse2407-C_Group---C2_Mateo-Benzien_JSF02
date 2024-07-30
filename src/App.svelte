<!-- src/App.svelte -->
<script>
  import Header from './components/Header.svelte';
  import Layout from './components/Layout.svelte';
  import Filter from './components/Filter.svelte';
  import Sort from './components/Sort.svelte';
  import ProductDetailView from './Pages/ProductDetailView.svelte';
  import Home from './Pages/Home.svelte';
  import { onMount, onDestroy } from 'svelte';
  import { products, loading, error, fetchProducts, setFilterItem, setSorting } from './Store/productStore';

  let view = 'home'; // Default view
  let productId = '';

  function handlePopState() {
    const path = window.location.pathname;
    if (path.startsWith('/product/')) {
      view = 'product-detail';
      productId = path.split('/')[2];
    } else {
      view = 'home';
    }
  }

  function resetFiltersAndSorting() {
    setFilterItem('');
    setSorting('default');
    fetchProducts(); // Fetch products after resetting
  }

  onMount(() => {
    window.addEventListener('popstate', handlePopState);
    handlePopState(); // Check initial state
    fetchProducts(); // Fetch initial data
  });

  onDestroy(() => {
    window.removeEventListener('popstate', handlePopState);
  });

  $: console.log('Products:', $products);
  $: console.log('Loading:', $loading);
  $: console.log('Error:', $error);
</script>

<div class="App">
  <Header />
  {#if $loading}
    <p>Loading...</p>
  {:else if $error}
    <p>Error: {$error}</p>
  {:else}
    {#if view === 'home'}
      <button on:click={resetFiltersAndSorting} class="reset-all-button">Reset All</button>
      <Filter />
      <Sort />
      <Layout />
    {:else if view === 'product-detail'}
      <ProductDetailView id={productId} />
    {/if}
  {/if}
</div>

<style>
  .reset-all-button {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: 2px solid #d1d5db;
    font-size: 0.875rem;
    background-color: #f3f4f6;
    color: #1a1a1a;
    cursor: pointer;
    margin: 1rem;
  }

  .reset-all-button:hover {
    background-color: #e5e7eb;
  }

  .reset-all-button:focus {
    outline-color: #3b82f6;
    border-color: #3b82f6;
  }
</style>
