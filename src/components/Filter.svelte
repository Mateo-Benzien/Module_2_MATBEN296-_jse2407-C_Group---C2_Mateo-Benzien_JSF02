<script>
  import { filterItem, setFilterItem } from '../Store/productStore';
  
  let selectedCategory = 'All Categories';
  let categories = [];
  
  // Fetch categories from the API
  async function fetchCategories() {
      try {
          const response = await fetch('https://fakestoreapi.com/products/categories');
          categories = await response.json();
          // Add "All Categories" as an option
          categories.unshift('All Categories');
      } catch (error) {
          console.error('Error fetching categories:', error);
      }
  }
  
  // Handle category selection change
  function handleChange(event) {
      selectedCategory = event.target.value;
      setFilterItem(selectedCategory === 'All Categories' ? '' : selectedCategory);
  }
  
  // Fetch categories when component mounts
  fetchCategories();
</script>

<div class="container filter">
  <div class="category-container">
      <div class="category-label">Categories:</div>
      <select bind:value={selectedCategory} on:change={handleChange} class="select-element">
          {#each categories as category}
              <option value={category}>{category}</option>
          {/each}
      </select>
  </div>
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
      position: absolute; /* Use absolute positioning */
      top: 20%; /* Adjust top position to move it up */
      right: 20%; /* Adjust right position as needed */
      width: auto;
      margin: 0; /* Remove margin when using absolute positioning */
  }

  .category-container {
      display: flex;
      align-items: center;
  }

  .category-label {
      margin-right: 10px;
      font-weight: bold;
  }

  .select-element {
      padding: 0.5rem; /* Smaller padding */
      border-radius: 0.5rem; /* Smaller border-radius */
      border: 2px solid #d1d5db;
      font-size: 0.875rem; /* text-sm */
      background-color: #f9f9f9;
      color: #1a1a1a;
      width: auto; /* Set width to auto */
      min-width: 150px; /* Set a minimum width if needed */
  }

  .select-element:focus {
      outline-color: #3b82f6;
      border-color: #3b82f6;
  }
</style>
