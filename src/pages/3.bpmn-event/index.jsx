import React, { useEffect } from "react";
// 引入相关的依赖
import BpmnModeler from "bpmn-js/lib/Modeler";
// 右边工具栏
// import propertiesPanelModule from "bpmn-js-properties-panel";
// import propertiesProviderModule from "bpmn-js-properties-panel/lib/provider/camunda";
// import camundaModdleDescriptor from "camunda-bpmn-moddle/resources/camunda";
// import "bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css";
import { xmlStr } from "@/mock/simple";
import { logWarnings } from "@/utils";

let m = {};
const modelerEvents = [
  "shape.added",
  "shape.move.end",
  "shape.removed",
  "connect.end",
  "connect.move",
];
const elementEvents = ["element.click", "element.changed"];

function BpmnEvent() {
  async function init() {
    console.log(m);
    const res = await m.importXML(xmlStr);
    logWarnings(res);
    // 这里我是用了一个forEach给modeler上添加要绑定的事件
    modelerEvents.forEach((event) => {
      m.on(event, (e) => {
        console.log(event, e);
        const elementRegistry = m.get("elementRegistry");
        const shape = e.element ? elementRegistry.get(e.element.id) : e.shape;
        console.log(shape);
      });
    });
    // 需要使用eventBus
    const eventBus = m.get("eventBus");
    elementEvents.forEach((event) => {
      eventBus.on(event, (e) => {
        if (!e || e.element.type === "bpmn:Process") {
          return;
        }
        console.log(event, e);
      });
    });
  }

  useEffect(() => {
    m = new BpmnModeler({
      container: ".bpmn-canvas",
      // 添加控制板
      // propertiesPanel: {
      //   parent: "#bpmn-properties-panel-container",
      // },
      // additionalModules: [
      //   // 右边的属性栏
      //   propertiesProviderModule,
      //   propertiesPanelModule,
      // ],
      // moddleExtensions: {
      //   camunda: camundaModdleDescriptor,
      // },
    });
    init();
  }, []);

  return (
    <div className="bpmn-container">
      <div className="bpmn-canvas bpmn-event"></div>
    </div>
  );
}

export default BpmnEvent;
