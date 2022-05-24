class ProductPrice {
  constructor(price) { 
    this.price = price;
  }
  render() {
    const productPrice = document.createElement('p');
    const span = document.createElement('span')
    productPrice.setAttribute('class', 'product-price');
    productPrice.textContent = `${this.price} `;
    span.textContent = '원'
    productPrice.appendChild(span);

    return productPrice;
  }
}

export default ProductPrice;
