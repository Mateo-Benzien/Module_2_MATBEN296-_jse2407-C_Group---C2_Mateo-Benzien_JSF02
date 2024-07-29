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

<div class="filter-container">
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
  .filter-container {
    display: flex;
    align-items: center;
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
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 2px solid #d1d5db;
    font-size: 0.875rem;
    background-color: #f9f9f9;
    color: #1a1a1a;
    width: auto;
    min-width: 150px;
  }

  .select-element:focus {
    outline-color: #3b82f6;
    border-color: #3b82f6;
  }
</style>
