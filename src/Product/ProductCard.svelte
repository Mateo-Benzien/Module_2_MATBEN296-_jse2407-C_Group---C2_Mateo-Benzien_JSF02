<script>
  import Ratings from '../components/Rating.svelte';

  export let product = {
    id: '',
    title: '',
    image: '',
    price: 0,
    rating: 0,
    category: ''
  };
</script>

<div class="product-card">
  <img src={product.image} alt={product.title} />
  <h2>{product.title}</h2>
  <div class="rating">
    <Ratings rate={product.rating} count={5} />
  </div>
  <p class="product-price">${product.price}</p>
  <p class="product-category">{product.category}</p>
  <button class="add-to-cart">Add to Cart</button>
  <button class="favorites-btn">
    <span class="favorites-icon"></span>
  </button>
</div>

<style>
  .product-card {
    border: 1px solid #000000;
    padding: 1rem;
    text-align: center;
    background-color: #272323;
    border-radius: 8px;
    transition: box-shadow 0.3s, transform 0.3s, background-color 0.3s;
    display: flex;
    flex-direction: column;
    align-items: center;
    color:#000
  }

  .product-card:hover {
    background-color: #4b4a4a;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.5rem;
    margin: 0.5rem 0;
  }

  .product-price {
    font-size: 1.125rem;
    color: #000;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .product-category {
    font-size: 0.875rem;
    color: #666;
    margin-bottom: 1rem;
  }

  .rating {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .add-to-cart {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    margin-top: auto;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s, transform 0.3s;
  }

  .add-to-cart:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }

  .favorites-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    transition: color 0.3s;
    margin-top: 0.5rem;
  }

  .favorites-icon {
    color: #fff;
  }

  .favorites-btn:hover .favorites-icon {
    color: #5e0e0e;
  }

  .favorites-icon::before {
    content: "🤍";
  }

  .favorites-btn:hover .favorites-icon::before {
    content: "💖";
  }
</style>
