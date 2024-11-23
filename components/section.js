export default class Section {
  constructor(items, render, selector) {
    this.container = selector;
    this.items = items;
    this.render = render;
  }
  // metodo que se encarga de mapear
  renderer() {
    this.items.forEach((element) => {
      this.addItem(element);
    });
  }

  // agregar elemento al Dom
  addItem(item) {
    this.container.append(this.render(item));
  }
}
