class FooterRightList {
  render() {
      const arr = [
        'instaLink',
        'fbLink',
        'ytLink',
      ];
      const ul = document.createElement('ul');

      arr.forEach((it) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.setAttribute('href', '#');
        a.classList.add(`${it}`);
        li.appendChild(a);
        ul.appendChild(li);
      });
      return ul;
  }
}

export default FooterRightList;
