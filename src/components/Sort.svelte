<script>
  import { onDestroy } from 'svelte'; 
  import { sorting, setSorting } from '../Store/productStore'; 
  
  let currentSorting = 'default';
  
  // Subscribe to the sorting store to get the current sorting value
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

<div class="flex sm:w-[95%] max-w-[21rem] md:w-full">
  <label for="sort" class="w-20 my-auto font-semibold">
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
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #ccf8fc;
    color: #333;
  }

  .container {
    width: 80%;
    margin: 0 auto;
  }

  .flex {
    display: flex;
    align-items: center;
  }

  .sm\:w-\[95\%\] {
    width: 95%;
  }

  .max-w-\[21rem\] {
    max-width: 21rem;
  }

  .md\:w-full {
    width: 100%;
  }

  .w-20 {
    width: 5rem;
  }

  .my-auto {
    margin: auto;
  }

  .font-semibold {
    font-weight: 600;
  }

  .select-element {
    padding: 0.625rem; /* 10px */
    border-radius: 0.75rem;
    border: 2px solid #d1d5db;
    font-size: 0.875rem; /* text-sm */
    background-color: #f9f9f9;
    color: #1a1a1a;
    width: 100%;
  }

  .select-element:focus {
    outline-color: #3b82f6;
    border-color: #3b82f6;
  }
</style>
