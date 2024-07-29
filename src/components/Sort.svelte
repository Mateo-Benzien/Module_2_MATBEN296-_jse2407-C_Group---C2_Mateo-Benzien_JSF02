<script>
  import { onDestroy } from 'svelte'; 
  import { sorting, setSorting } from '../Store/productStore'; 
  
  let currentSorting = 'default';
  
  // Subscribe to the sorting store
  const unsubscribe = sorting.subscribe(value => {
    currentSorting = value;
  });
  
  // Cleanup subscription on component destroy
  onDestroy(() => {
    unsubscribe();
  });
  
  // Handler for sort change
  function handleSort(event) {
    setSorting(event.target.value);
  }
</script>

<div class="sort-container">
  <label for="sort" class="sort-label">
    Sort by: 
  </label>
  <select
    on:change={handleSort}
    bind:value={currentSorting}
    id="sort"
    class="select-element"
  >
    <option value="default">Default</option>
    <option value="low">Price: Low to High</option>
    <option value="high">Price: High to Low</option>
  </select>
</div>

<style>
  .sort-container {
    display: flex;
    align-items: center;
  }

  .sort-label {
    margin-right: 1rem;
    font-weight: 600;
  }

  .select-element {
    padding: 0.625rem;
    border-radius: 0.75rem;
    border: 2px solid #d1d5db;
    font-size: 0.875rem;
    background-color: #f9f9f9;
    color: #1a1a1a;
  }

  .select-element:focus {
    outline-color: #3b82f6;
    border-color: #3b82f6;
  }
</style>
