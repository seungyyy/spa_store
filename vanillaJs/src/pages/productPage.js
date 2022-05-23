class ProductPage { 
  constructor() { 
    this.product = {};
  }

  async getProductData() {
    try {
      const res = await fetch('http://35.76.53.28:8080/mall', {
        method: 'GET',
      });
      const json = await res.json();
      this.product = json
      console.log(this.product);
    } catch (e) {
      console.log(e);
    }
  }


  render() {
    const container = document.createElement('div');
    const el = document.createElement('h1');
    el.innerText = '상품목록'
    
    const a = document.createElement('a');
    a.href = './detail';
    a.innerText = '상세페이지로 이동'
    
    const a1 = document.createElement('a');
    a1.href = './detail/1';
    a1.innerText = '1 상세페이지로 이동';
    
    const a2 = document.createElement('a');
    a2.href = './detail/2';
    a2.innerText = '2 상세페이지로 이동';

    const a3 = document.createElement('a');
    a2.href = './cart';
    a2.innerText = '장바구니 페이지로 이동';

    container.appendChild(el);
    container.appendChild(a);
    container.appendChild(a1);
    container.appendChild(a2);
    container.appendChild(a3);

    this.getProductData();
    return container;
  }
}

export default ProductPage