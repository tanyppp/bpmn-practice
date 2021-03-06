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
import customModule from "./partCustom/index";

let m = {};

function PartCustom() {
  async function init() {
    console.log(m);
    const res = await m.importXML(xmlStr);
    logWarnings(res);
  }

  useEffect(() => {
    m = new BpmnModeler({
      container: ".bpmn-canvas",
      // 添加控制板
      // propertiesPanel: {
      //   parent: "#bpmn-properties-panel-container",
      // },
      additionalModules: [
        // 右边的属性栏
        // propertiesProviderModule,
        // propertiesPanelModule,
        customModule,
      ],
      // moddleExtensions: {
      //   camunda: camundaModdleDescriptor,
      // },
    });
    init();
  }, []);

  return (
    <div className="bpmn-container">
      <div className="bpmn-canvas part-custom"></div>
    </div>
  );
}

export default PartCustom;
