class ProductItem { 
  constructor(item) { 
    this.item = item
  }
  render() {
    const productItem = document.createElement('li');
    const productCard = document.createElement('a');
    productCard.href = `/detail/${this.item.id}`
    productCard.setAttribute('class', 'proudt-item"');

    const productImgContainer = document.createElement('div');
    productImgContainer.setAttribute('class', 'proudt-img"');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', `https://test.api.weniv.co.kr/${this.item.thumbnailImg} `);
    productImg.setAttribute('alt', '상품이미지');

    const productPriceContainer = document.createElement('div');

    const productName = document.createElement('p');
    productName.setAttribute('class', 'product-name');
    productName.textContent = `${this.item.productName}`

    const productPrice = document.createElement('span');
    productPrice.setAttribute('class', 'product-price');
    productPrice.textContent = `${this.item.price}원`;

    productImgContainer.appendChild(productImg);
    productPriceContainer.appendChild(productName);
    productPriceContainer.appendChild(productPrice);

    productCard.appendChild(productImgContainer);
    productCard.appendChild(productPriceContainer);
    productItem.appendChild(productCard);

    return productItem;
  }
}

export default ProductItem;