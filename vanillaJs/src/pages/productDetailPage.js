import Header from '../components/common/hearder.js';
import Footer from '../components/common/footer/footer.js';

class ProductDetailPage {
  constructor(id) {
    this.id = id === undefined ? '' : id[1];
    this.product = {};
    this.main = document.createElement('main');
  }
  async getProductData(id) {
    try {
      const res = await fetch(`https://test.api.weniv.co.kr/mall/${id}`, {
        method: 'GET',
      });
      const json = await res.json();
      this.product = json;
      console.log(this.product);
    } catch (e) {
      console.log(e);
    }
  }

  async setProductDetailData() { 
    await this.getProductData(this.id);

    const header = new Header();
    const footer = new Footer();
    this.main.classList.add('product-detail');
    const el = document.createElement('h1');
    el.innerText = `${this.id}상세페이지`;
    const a = document.createElement('a');
    a.href = '/vanillaJs/';
    a.innerText = '상품목록 이동';

    this.main.before(header.render());
    this.main.after(footer.render());

    this.main.appendChild(el);
    this.main.appendChild(a);

  }
  render() {
    this.setProductDetailData();

    return this.main;
  }
}

export default ProductDetailPage;
