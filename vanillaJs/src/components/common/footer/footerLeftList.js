class FooterLeftList {
  render() {
    const arr = [
        '호두샵 소개',
        '이용약관',
        '개인정보처리방침',
        '전자금융거래약관',
        '청소년 보호정책',
        '제휴문의',
    ];
    const ul = document.createElement('ul')

    ul.classList.add('left-list')

    arr.forEach((it) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.setAttribute('href', 'javascript:void(0);');
      a.textContent = it;

      if (a.textContent === '제휴문의') {
        a.classList.add('lastli');
      }

      li.appendChild(a);
      ul.appendChild(li);
    });

   
    return ul;
  }
}

export default FooterLeftList;
