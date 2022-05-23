class CartPage {
  render() {
    const container = document.createElement('div');
    const el = document.createElement('h1');
    el.innerText = '장바구니 페이지';
    const a = document.createElement('a');
    a.href = './';
    a.innerText = '상품목록 이동';

    container.appendChild(el);
    container.appendChild(a);

    return container;
  }
}

export default CartPage;
