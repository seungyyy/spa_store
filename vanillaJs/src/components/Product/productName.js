class ProductName {
  constructor(name) {
    this.name = name;
  }
  render() {
    const productName = document.createElement('p');
    productName.setAttribute('class', 'product-name');
    productName.textContent = `${this.name}`;
    return productName;
  }
}

export default ProductName;
