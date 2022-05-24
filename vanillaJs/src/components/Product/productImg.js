class ProductImg {
  constructor(src) {
    this.src = src;
  }
  render() {
    const productImgContainer = document.createElement('div');
    productImgContainer.setAttribute('class', 'proudt-img"');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', `https://test.api.weniv.co.kr/${this.src} `);
    productImg.setAttribute('alt', '상품이미지');

    productImgContainer.appendChild(productImg);

    return productImgContainer;
  }
}

export default ProductImg;