class Footerdl { 
  render() {
    const dl = document.createElement('ul');

    dl.innerHTML = `
      <dt className="ir">주식회사</dt>
        <dd>
          <strong>(주)HODU SHOP</strong>
        </dd>
        <dt className="hidden">주소</dt>
        <dd> 제주특별자치도 제주시 동광고 137 제주코딩베이스캠프</dd>
        <dt className="dt-float-left">사업자번호 :</dt>
        <dd className="dd-float-left"> 000-0000-0000 &#124;</dd>
        <dt className="hidden">업종</dt>
        <dd>&nbsp;통신판매업 </dd>
        <dt className="dt-float-left">대표 : </dt>
        <dd>김호두</dd>
    `;

    return dl;
  }
}

export default Footerdl;