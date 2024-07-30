<script>
  export let id;
  export let title;
  export let description;
  export let image;
  export let price;
  export let rating;
  export let category;
</script>

<div class="product-detail">
  <h1>{title}</h1>
  <img src={image} alt={title} />
  <p>{description}</p>
  <p>Price: ${price}</p>
  <p>Category: {category}</p>
  <p>Rating: {rating}</p>
</div>

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
</style>
