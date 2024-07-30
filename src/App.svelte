<script>
  import Header from './components/Header.svelte';
  import Layout from './components/Layout.svelte';
  import Filter from './components/Filter.svelte';
  import Sort from './components/Sort.svelte';
  import ProductDetailView from './Pages/ProductDetailView.svelte';
  import Home from './Pages/Home.svelte';
  import { onMount, onDestroy } from 'svelte';

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

  onMount(() => {
    window.addEventListener('popstate', handlePopState);
    handlePopState(); // Check initial state
  });

  onDestroy(() => {
    window.removeEventListener('popstate', handlePopState);
  });
</script>

<div class="App">
  <Header />
  {#if view === 'home'}
    <Filter />
    <Sort />
    <Layout />
  {:else if view === 'product-detail'}
    <ProductDetailView id={productId} />
  {/if}
</div>

<style>
  /* Add your styles here */
</style>
