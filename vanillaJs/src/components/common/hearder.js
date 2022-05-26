class Header {
  constructor(header) { 
    this.header = document.createElement('header');

  }
  
  headerInner() { 
    const nav = document.createElement('nav');
    const div = document.createElement('div');
    this.header.appendChild(nav);
    nav.appendChild(div);
    div.classList.add('header-container');

    div.innerHTML = `
      <a href="/vanillaJs/">
        <div class="link-logo-box">
          <Image src=/vanillaJs/assets/logo-hodu.png alt="logo" />
        </div>
      </a>
      <div class="li-inp">
        <label htmlFor="search-inp"></label>
        <input type="text" name="search-inp" placeholder="상품을 검색해보세요!" />
      </div>
      <a href="/vanillaJs/cart" class="cart-page"></a>
    `;
  }  


  render() {
    this.headerInner();

    return this.header;
  }
}

export default Header;
