<script>
    import { productDetails } from '../Store/productStore';
  
    let product = {}; // Placeholder for product details, fetch from store or API
  
    // Example of fetching product details
    productDetails.subscribe(value => {
      product = value;
    });
  </script>
  
  <ProductDetail
    {product.id}
    {product.title}
    {product.description}
    {product.image}
    {product.price}
    {product.rating}
    {product.category}
  />
  
  <style>
    
  </style>
  