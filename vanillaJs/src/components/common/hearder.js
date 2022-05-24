class Header {
  render() {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const div = document.createElement('div');
   
    header.appendChild(nav);
    nav.appendChild(div);
    div.classList.add('header-container')

    div.innerHTML = `
      <a href="/vanillaJs">
        <div class="link-logo-box">
          <Image src='assets/logo-hodu.png' alt="logo" />
        </div>
      </a>
      <div class="li-inp">
        <label htmlFor="search-inp"></label>
        <input type="text" name="search-inp" placeholder="상품을 검색해보세요!" />
      </div>
    `; 

    return header;
  }
}

export default Header;
