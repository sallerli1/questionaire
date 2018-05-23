
export default function Component(obj) {
  return new Promise((resolve, reject) => {
    let component = {};
    component.data = obj.data;
    component.methods = obj.methods;
    const element = document.querySelector(obj.selector);
    element.template = obj.template;
    component.element = element;

    component.beforeMount =
      obj.beforeMount instanceof Function ? obj.beforeMount : function() {};
    component.mounted =
      obj.mounted instanceof Function ? obj.mounted : function() {};
    component.updated =
      obj.updated instanceof Function ? obj.updated : function() {};

    mount(component, element);

    resolve(component)
  })
}

function mount(com, element) {
  com.beforeMount.call(com);
  render(com, element, com.data, com.methods);
  com.mounted.call(com);

  for (const key of Object.keys(com.data)) {
    defineReactive(com.data, key, {
      self: com,
      data: com.data,
      methods: com.methods
    });
  }
}

function render(self, element, data, methods) {
  if (element.template) {
    element.innerHTML = element.template;
  }

  if (element.nodeType === Node.ELEMENT_NODE) {
    let fors = element.querySelectorAll("[data-for]");

    renderFor(self, fors, data, methods);

    for (let i = 0; i < element.attributes.length; i++) {
      let matches;
      if (
        (matches = element.attributes[i].textContent.trim().match(/({{\w+}})/g))
      ) {
        for (const match of matches) {
          let key = match.trim().match(/{{(\w+)}}/)[1];
          element.setAttribute(
            element.attributes[i].name,
            element.attributes[i].textContent.replace(match, data[key])
          );
        }
      }

      if ((matches = element.attributes[i].name.trim().match(/^bind-(\w+)$/))) {
        let fnName = element.attributes[i].textContent.trim();

        element.removeAttribute(matches[0]);
        element.addEventListener(matches[1], event => {
          let currentData = data;
          methods[fnName].call(self, event, currentData);
        });
      }
    }
  } else if (element.nodeType === Node.TEXT_NODE) {
    let matches;
    if ((matches = element.nodeValue.trim().match(/({{\w+}})/g))) {
      for (const match of matches) {
        let key = match.trim().match(/{{(\w+)}}/)[1];
        element.nodeValue = element.nodeValue.replace(match, data[key]);
      }
    }
  }

  if (element.childNodes.length) {
    for (const node of element.childNodes) {
      render(self, node, data, methods);
    }
  }

  self.updated()
}

function renderFor(self, fors, data, methods) {
  for (const one of fors) {
    if (data[one.dataset.for]) {
      for (let i = 0; i < data[one.dataset.for].length; i++) {
        let element = one.cloneNode(true);
        element.removeAttribute("data-for");

        if (Object.prototype.toString.call(data[one.dataset.for][i]) === "[object Object]") {
            render(self, element, data[one.dataset.for][i], methods);
        } else {
            render(self, element, {
                item: data[one.dataset.for][i]
            }, methods);
        }
        
        one.insertAdjacentElement("beforeBegin", element);
      }
    } else {
      let count = parseInt(one.dataset.for);

      if (typeof count === "number") {
        for (let i = 1; i <= count; i++) {
          let element = one.cloneNode(true);
          element.removeAttribute("data-for");

          render(self, element, { num: i }, methods);
          one.insertAdjacentElement("beforeBegin", element);
        }
      }
    }

    one.remove();
  }
}

function defineReactive(obj, key, options) {
  let value = obj[key];

  Object.defineProperty(obj, key, {
    get() {
      return value;
    },
    set(newVal) {
      if (newVal === value) {
        return;
      }
      value = newVal;
      render(options.self, options.self.element, options.data, options.methods);
    }
  });

  if (Object.prototype.toString.call(obj[key]) === "[object Object]") {
    for (const subKey of Object.keys(obj[key])) {
      defineReactive(obj[key], subKey, options);
    }
  }

  if (Array.isArray(obj[key])) {
    for (const item of obj[key]) {
      if (Object.prototype.toString.call(item) === "[object Object]") {
        for (const subKey of Object.keys(item)) {
          defineReactive(item, subKey, options);
        }
      }
    }
  }
}

function proxy(obj1, obj2, key1, key2) {
  let value;
  Object.defineProperty(obj1, key1, {
    set(newVal) {
      value = newVal;
      obj2[key2] = newVal;
    },
    get() {
      return value;
    }
  });
}

Component.defineReactive = defineReactive;
Component.proxy = proxy;
