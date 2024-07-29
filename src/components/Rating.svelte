<script>
  export let rating = 0;

  // Generate a random rating between 1 and 5 if no rating is provided
  $: effectiveRating = rating > 0 ? rating : Math.floor(Math.random() * 5) + 1;
</script>

<div class="stars">
  {#each Array(5).fill(0) as _, i}
    <span class="star" class:filled={effectiveRating > i}>&#9733;</span>
  {/each}
</div>

<style>
  .stars {
    display: inline-flex;
    font-size: 1.25rem;
    margin-bottom: 8px;
  }

  .star {
    color: #ddd;
    margin: 0 2px;
    font-size: 1.5rem;
    transition: color 0.3s;
  }

  .star.filled {
    color: #f5b301;
  }
</style>
