/* eslint-disable import/no-anonymous-default-export */
import CustomPalette from "./CustomPalette";
import CustomRenderer from "./CustomRenderer";
import CustomContextPad from "./CustomContextPad";

export default {
  __init__: ["paletteProvider", "customRenderer", "contextPadProvider"],
  paletteProvider: ["type", CustomPalette],
  customRenderer: ["type", CustomRenderer],
  contextPadProvider: ["type", CustomContextPad],
};
