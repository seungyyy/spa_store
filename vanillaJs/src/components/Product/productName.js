class ProductName {
  constructor(name) {
    this.name = name;
  }

  handleChangeLike(e) { 
    e.preventDefault();
    e.stopPropagation();
    if (e.target.classList.contains('btn-off')) { 
      e.target.classList.remove('btn-off');
      e.target.classList.add('btn-on');
      return;
    }
    if (e.target.classList.contains('btn-on')) {
      e.target.classList.remove('btn-on');
      e.target.classList.add('btn-off');
      return;
    }
  }

  render() {
    const productName = document.createElement('div');
    const p = document.createElement('p')
    const button = document.createElement('button');
    productName.setAttribute('class', 'product-name-box');
    p.setAttribute('class', 'product-name');
    button.setAttribute('class', 'product-like-btn btn-off');
    p.textContent = `${this.name.slice(0, 27)}`;

    productName.appendChild(p);
    productName.appendChild(button);

    button.addEventListener('click', this.handleChangeLike)
    return productName;
  }
}

export default ProductName;
