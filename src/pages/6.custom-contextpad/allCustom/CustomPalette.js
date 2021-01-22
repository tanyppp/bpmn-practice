/**
 * A palette that allows you to create BPMN _and_ custom elements.
 */
class PaletteProvider {
  constructor(palette, create, elementFactory, globalConnect, translate) {
    this.create = create;
    this.elementFactory = elementFactory;
    this.globalConnect = globalConnect;
    this.translate = translate;

    palette.registerProvider(this);
  }

  getPaletteEntries(element) {
    const { create, elementFactory, translate } = this;

    function createTask() {
      return function (event) {
        const shape = elementFactory.createShape({
          type: "bpmn:Task",
        });
        console.log(shape); // 只在拖动或者点击时触发
        create.start(event, shape);
      };
    }

    return {
      "create.tanyp-task": {
        group: "model",
        className: "icon-custom tanyp-task",
        title: translate("创建一个类型为tanyp-task的任务节点"),
        action: {
          dragstart: createTask(),
          click: createTask(),
        },
      },
    };
  }
}

PaletteProvider.$inject = [
  "palette",
  "create",
  "elementFactory",
  "globalConnect",
  "translate",
];

export default PaletteProvider;
