/**
 * @ag-grid-community/core - Advanced Data Grid / Data Table supporting Javascript / Typescript / React / Angular / Vue
 * @version v28.0.0
 * @link https://www.ag-grid.com/
 * @license MIT
 */
import { Component } from "../../../widgets/component";
export class AbstractHeaderCellComp extends Component {
    constructor(template, ctrl) {
        super(template);
        this.ctrl = ctrl;
    }
    getCtrl() {
        return this.ctrl;
    }
}

//# sourceMappingURL=abstractHeaderCellComp.js.map