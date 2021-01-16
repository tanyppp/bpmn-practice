export function logWarnings(res) {
  const {warnings} = res;
  for (let w of warnings) {
    console.warn('bpmn warn: ', w);
  }
}

export function downloadWithHref({
  href,
  data,
  name
} = {
  href: '',
  data: '',
  name: ''
}) {
  const aTag = document.createElement('a');
  aTag.href = href || `data:application/bpmn20-xml;charset=UTF-8,${encodeURIComponent(data)}`;
  aTag.download = name;
  document.body.appendChild(aTag);
  aTag.click();
  document.body.removeChild(aTag);
}
