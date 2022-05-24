import ProductCard from '../components/ProductCard.js';
import Header from '../components/common/hearder.js';
import Footer from '../components/common/footer/footer.js';
class ProductPage { 
  constructor() { 
    this.product = {};
    this.main = document.createElement('main')
  }

  async getProductData() {
    try {
      const data = await fetch('https://test.api.weniv.co.kr/mall', {
        method: 'get',
      });
      const res = await data.json();
      this.product = res;
      console.log(this.product);
    } catch (e) {
      console.log(e);
    }
  }

  async setProductData() { 
    await this.getProductData()
    
    const header = new Header();
    const footer = new Footer();
    this.main.classList.add("product");

    this.main.before(header.render());
    this.main.after(footer.render())

    const productHeader = document.createElement('h1');
    productHeader.classList.add('ir');
    productHeader.textContent = '상품목록페이지';

    const productList = document.createElement('ul');
    productList.classList.add('product-list');

    this.main.appendChild(productHeader)
    this.main.appendChild(productList)

    this.product.forEach(async (it) => { 
      const productCard = new ProductCard(it)
      productList.append(productCard.render());
    })
  }

  render() {
    this.setProductData();
   
    return this.main;
  }
}

export default ProductPage