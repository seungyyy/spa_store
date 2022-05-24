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

    arr.forEach((it) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.setAttribute('href', '#');
      a.textContent = it;
      li.appendChild(a);
      ul.appendChild(li);
    });
    return ul;
  }
}

export default FooterLeftList;
