export function Initializer() {
  this.initComponents();
}

Initializer.prototype.initComponents = function () {
  this.getRoutes().forEach((route) => {
    document
      .querySelectorAll(`[data-component='${route.componentId}']`)
      .forEach((el) => new route.module(el));
  });
};

Initializer.prototype.getRoutes = () => [{}];
