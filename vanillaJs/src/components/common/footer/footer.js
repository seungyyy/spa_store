import Footerdl from "./footerdl.js";
import FooterRightList from './footerRightList.js';
import FooterLeftList from './footerLeftList.js';

class Footer { 
  render() {
    const footer = document.createElement('footer');
    const div = document.createElement('div');
    const hr = document.createElement('hr')
    const leftList = new FooterLeftList;
    const rightList = new FooterRightList;
    const dl = new Footerdl;

    div.appendChild(leftList.render());
    div.appendChild(rightList.render());

    footer.appendChild(div);
    footer.appendChild(hr)
    footer.appendChild(dl.render());

    return footer;

  }
}

export default Footer;