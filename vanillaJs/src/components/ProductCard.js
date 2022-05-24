import { ProductImg, ProductPrice, ProductName } from './Product/index.js'

class ProductCard {
  constructor(item) {
    this.item = item;
  }
  render() {
    const productContainer = document.createElement('li');
    const productLink = document.createElement('a');
    productLink.href = `/detail/${this.item.id}`;
    productLink.setAttribute('class', 'proudt-item"');

    const productName = new ProductName(this.item.productName);
    const productImg = new ProductImg(this.item.thumbnailImg);
    const productPrice = new ProductPrice(this.item.price);
    
    productContainer.appendChild(productLink);
    productLink.appendChild(productName.render());
    productLink.appendChild(productImg.render());
    productLink.appendChild(productPrice.render());

    return productContainer;
  }
}

export default ProductCard;