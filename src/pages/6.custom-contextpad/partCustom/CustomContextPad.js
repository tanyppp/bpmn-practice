/**
 * A palette that allows you to create BPMN _and_ custom elements.
 */
class ContextPadProvider {
  constructor(
    config,
    contextPad,
    create,
    elementFactory,
    injector,
    translate,
    modeling
  ) {
    this.create = create;
    this.elementFactory = elementFactory;
    this.translate = translate;
    this.modeling = modeling;

    if (config.autoPlace !== false) {
      this.autoPlace = injector.get("autoPlace", false);
    }

    contextPad.registerProvider(this); // 定义这是一个contextPad
  }

  getContextPadEntries(element) {
    const { autoPlace, create, elementFactory, translate, modeling } = this;

    function clickElement(e) {
      console.log(element);
    }

    function removeElement(e) {
      // 点击的时候实现删除功能
      modeling.removeElements([element]);
    }

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
      delete: {
        group: "edit",
        className: "icon-custom icon-custom-delete",
        title: translate("删除"),
        action: {
          click: removeElement,
        },
      },
      edit: {
        group: "edit",
        className: "icon-custom icon-custom-edit",
        title: translate("编辑"),
        action: {
          click: clickElement,
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
  "modeling",
];

export default ContextPadProvider;
