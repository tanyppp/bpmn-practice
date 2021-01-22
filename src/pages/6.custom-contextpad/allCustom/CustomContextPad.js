/**
 * A palette that allows you to create BPMN _and_ custom elements.
 */
class ContextPadProvider {
  constructor(config, contextPad, create, elementFactory, injector, translate) {
    this.create = create;
    this.elementFactory = elementFactory;
    this.translate = translate;

    if (config.autoPlace !== false) {
      this.autoPlace = injector.get("autoPlace", false);
    }

    contextPad.registerProvider(this); // 定义这是一个contextPad
  }

  getContextPadEntries(element) {
    const { autoPlace, create, elementFactory, translate } = this;

    function appendTask(event, element) {
      if (autoPlace) {
        console.log("auto");
        const shape = elementFactory.createShape({ type: "bpmn:Task" });
        autoPlace.append(element, shape);
      } else {
        console.log("not auto");
        appendTaskStart(event, element);
      }
    }

    function appendTaskStart(event) {
      const shape = elementFactory.createShape({ type: "bpmn:Task" });
      create.start(event, shape, element);
    }

    return {
      "append.tanyp-task": {
        group: "model",
        className: "icon-custom tanyp-task",
        title: translate("创建一个类型为tanyp-task的任务节点"),
        action: {
          click: appendTask,
          dragstart: appendTaskStart,
        },
      },
    };
  }
}

ContextPadProvider.$inject = [
  "config",
  "contextPad",
  "create",
  "elementFactory",
  "injector",
  "translate",
];

export default ContextPadProvider;
