import React, { useState, useEffect } from "react";
// 引入相关的依赖
import BpmnModeler from "bpmn-js/lib/Modeler";
// import camundaModdleDescriptor from "camunda-bpmn-moddle/resources/camunda";
import { xmlStr } from "@/mock/simple";
import { logWarnings, downloadWithHref } from "@/utils";

let m = {};

const downloadOptionsMap = {
  svg: {
    data: "",
    name: "bpmn-demo.svg",
  },
  xml: {
    data: "",
    name: "bpmn-demo.xml",
  },
};

function HttpUse() {
  const [isLoading, setIsLoading] = useState(false);

  // 模拟请求
  async function getData() {
    setIsLoading(true);
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    setIsLoading(false);

    return xmlStr;
  }

  async function init() {
    const xmlData = await getData();
    m = new BpmnModeler({
      container: ".bpmn-canvas",
      // moddleExtensions: {
      //   camunda: camundaModdleDescriptor,
      // },
    });
    console.log(m);
    const res = await m.importXML(xmlData);
    logWarnings(res);
    saveSvg();
    saveXml();
    m.on("commandStack.changed", () => {
      saveSvg();
      saveXml();
    });
  }

  async function saveSvg() {
    const data = await m.saveSVG();
    downloadOptionsMap.svg.data = data.svg;
  }

  async function saveXml() {
    const data = await m.saveXML({ format: true });
    downloadOptionsMap.xml.data = data.xml;
  }

  function onSaveSvg() {
    const { data, name } = downloadOptionsMap.svg;

    downloadWithHref({
      data,
      name,
    });
  }

  function onSaveXml() {
    const { data, name } = downloadOptionsMap.xml;

    downloadWithHref({
      data,
      name,
    });
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="bpmn-container">
      <div className="bpmn-canvas http-use">{isLoading && "loading..."}</div>
      {!isLoading && (
        <div className="btn-container">
          <button onClick={onSaveSvg}>保存为svg</button>
          <button onClick={onSaveXml}>保存为xml</button>
        </div>
      )}
    </div>
  );
}

export default HttpUse;
