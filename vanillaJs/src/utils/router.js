class Router { 
  constructor(routes) { 
    if (!routes) { 
      console.error('can not initailize routes, need routes!');
    }
    this.routes = routes;

    for (const key in routes) {
      const route = routes[key];
      if (key.indexOf(':') > -1) { 
        const [_, routeName, params] = key.split('/');
        this.routes['/' + routeName] = route;
        delete this.routes[key];
      }
    }
  }

  init(rootElementId) { 
    if (!rootElementId) { 
      console.error('can not initailize routes, not define path');
      return;
    }
    this.rootElementId = rootElementId;

    this.routing(window.location.pathname)
    window.addEventListener('click', (e) => { 
      if (e.target.tagName.toLowerCase() === 'a') { 
        e.preventDefault();
        this.routePush(e.target.href)
      }
    })

    window.onpopstate = () => this.routing(window.location.pathname)
  }

  routePush(pathname) { 
    window.history.pushState({}, null, pathname);
    this.routing(window.location.pathname)
  }

  routing(pathname) { 
    const [_, routeName, ...params] = pathname.split('/');
    let page = '';

    // /detail/10
    if (this.routes[pathname]) {
      const component = new this.routes[pathname];
      page = component.render()
    } else if (params) { 
      const component = new this.routes['/' + routeName](params);
      page = component.render()
    }

    if (page) { 
      this.render(page)
    }
  }

  render(page) { 
    const rootElement = document.querySelector(this.rootElementId)
    rootElement.innerHTML = '';
    rootElement.appendChild(page);
  }
}

export default Router