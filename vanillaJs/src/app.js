import { ProductPage, ProductDetailPage, CartPage } from './pages/index.js';
import { Router } from './utils/index.js';

export default class App {
  constructor(props) {
    this.props = props;
  }

  setup() {
    const { el } = this.props;

    const router = new Router({
      '/vanillaJs/': ProductPage,
      '/vanillaJs/detail': ProductDetailPage,
      '/vanillaJs/detail/:id': ProductDetailPage,
      '/vanillaJs/cart': CartPage,
    });

    router.init(el);
  }
}
