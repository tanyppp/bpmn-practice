export function logWarnings(res) {
  const {warnings} = res;
  for (let w of warnings) {
    console.warn('bpmn warn: ', w);
  }
}
