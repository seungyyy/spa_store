class ProductPrice {
  constructor(price) { 
    this.price = price;
  }
  render() {
    const productPrice = document.createElement('span');
    productPrice.setAttribute('class', 'product-price');
    productPrice.textContent = `${this.price}원`;
    return productPrice;
  }
}

export default ProductPrice;
