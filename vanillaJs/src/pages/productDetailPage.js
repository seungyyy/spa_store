class ProductDetailPage {
  constructor(id) {
    this.id = id === undefined ? '' : id[1];
    this.product = {};
  }
  async getProductData(id) {
    console.log(id)
    // try {
    //   const res = await fetch(`https://test.api.weniv.co.kr/mall/${id}`, {
    //     method: 'GET',
    //   });
    //   const json = await res.json();
    //   this.product = json;
    //   console.log(this.product);
    // } catch (e) {
    //   console.log(e);
    // }
  }
  render() {
    console.log(this.id);
    const container = document.createElement('div');
    const el = document.createElement('h1');
    el.innerText = `${this.id}상세페이지`;
    const a = document.createElement('a');
    a.href = './';
    a.innerText = '상품목록 이동';

    container.appendChild(el);
    container.appendChild(a);

    this.getProductData(this.id);
    return container;
  }
}

export default ProductDetailPage;