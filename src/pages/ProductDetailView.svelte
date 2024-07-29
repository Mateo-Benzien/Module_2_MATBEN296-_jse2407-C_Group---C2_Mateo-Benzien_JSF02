<script>
    import { onMount } from 'svelte';
    import ProductDetail from '../Product/ProductDetail.svelte';
    import ProductSkeleton from '../Product/ProductSkeleton.svelte';
    import Error from '../components/Error.svelte';
  
    let id;
    let product = {};
    let error = null;
    let loading = true;
  
    onMount(async () => {
      id = $page.params.id; // Assuming you are using SvelteKit
      try {
        const { response, error: fetchError } = await fetchSingleProduct(id);
        if (fetchError) {
          error = fetchError;
        } else {
          product = response;
        }
      } catch (err) {
        error = { message: 'An error occurred while fetching the product.' };
      } finally {
        loading = false;
      }
    });
  </script>
  
  <div class="flex justify-center">
    {#if error}
      <Error {error} />
    {:else if loading}
      <ProductSkeleton />
    {:else}
      <ProductDetail {product} />
    {/if}
  </div>
  
  <style>
    /* Add any additional styles here if needed */
  </style>
  