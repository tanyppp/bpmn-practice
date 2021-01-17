import Modeler from 'bpmn-js/lib/Modeler';
import CustomModule from './allCustom/index';

class CustomModeler extends Modeler {
  get _modules() {
    return super._modules.concat(CustomModule)
  }
}

export default CustomModeler;
