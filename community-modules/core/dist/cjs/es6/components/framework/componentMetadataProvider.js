/**
 * @ag-grid-community/core - Advanced Data Grid / Data Table supporting Javascript / Typescript / React / Angular / Vue
 * @version v27.2.0
 * @link http://www.ag-grid.com/
 * @license MIT
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const context_1 = require("../../context/context");
const beanStub_1 = require("../../context/beanStub");
let ComponentMetadataProvider = class ComponentMetadataProvider extends beanStub_1.BeanStub {
    postConstruct() {
        this.componentMetaData = {
            dateComponent: {
                mandatoryMethodList: ['getDate', 'setDate'],
                optionalMethodList: ['afterGuiAttached', 'setInputPlaceholder', 'setInputAriaLabel']
            },
            detailCellRenderer: {
                mandatoryMethodList: [],
                optionalMethodList: ['refresh'],
                functionAdapter: this.agComponentUtils.adaptCellRendererFunction.bind(this.agComponentUtils)
            },
            headerComponent: {
                mandatoryMethodList: [],
                optionalMethodList: ['refresh']
            },
            headerGroupComponent: {
                mandatoryMethodList: [],
                optionalMethodList: []
            },
            loadingCellRenderer: {
                mandatoryMethodList: [],
                optionalMethodList: []
            },
            loadingOverlayComponent: {
                mandatoryMethodList: [],
                optionalMethodList: []
            },
            noRowsOverlayComponent: {
                mandatoryMethodList: [],
                optionalMethodList: []
            },
            floatingFilterComponent: {
                mandatoryMethodList: ['onParentModelChanged'],
                optionalMethodList: ['afterGuiAttached']
            },
            floatingFilterWrapperComponent: {
                mandatoryMethodList: [],
                optionalMethodList: []
            },
            cellRenderer: {
                mandatoryMethodList: [],
                optionalMethodList: ['refresh', 'afterGuiAttached'],
                functionAdapter: this.agComponentUtils.adaptCellRendererFunction.bind(this.agComponentUtils)
            },
            cellEditor: {
                mandatoryMethodList: ['getValue'],
                optionalMethodList: ['isPopup', 'isCancelBeforeStart', 'isCancelAfterEnd', 'getPopupPosition', 'focusIn', 'focusOut', 'afterGuiAttached']
            },
            innerRenderer: {
                mandatoryMethodList: [],
                optionalMethodList: ['afterGuiAttached'],
                functionAdapter: this.agComponentUtils.adaptCellRendererFunction.bind(this.agComponentUtils)
            },
            fullWidthCellRenderer: {
                mandatoryMethodList: [],
                optionalMethodList: ['refresh', 'afterGuiAttached'],
                functionAdapter: this.agComponentUtils.adaptCellRendererFunction.bind(this.agComponentUtils)
            },
            pinnedRowCellRenderer: {
                mandatoryMethodList: [],
                optionalMethodList: ['refresh', 'afterGuiAttached'],
                functionAdapter: this.agComponentUtils.adaptCellRendererFunction.bind(this.agComponentUtils)
            },
            groupRowRenderer: {
                mandatoryMethodList: [],
                optionalMethodList: ['afterGuiAttached'],
                functionAdapter: this.agComponentUtils.adaptCellRendererFunction.bind(this.agComponentUtils)
            },
            filter: {
                mandatoryMethodList: ['isFilterActive', 'doesFilterPass', 'getModel', 'setModel'],
                optionalMethodList: ['afterGuiAttached', 'onNewRowsLoaded', 'getModelAsString', 'onFloatingFilterChanged']
            },
            filterComponent: {
                mandatoryMethodList: ['isFilterActive', 'doesFilterPass', 'getModel', 'setModel'],
                optionalMethodList: ['afterGuiAttached', 'onNewRowsLoaded', 'getModelAsString', 'onFloatingFilterChanged']
            },
            statusPanel: {
                mandatoryMethodList: [],
                optionalMethodList: ['afterGuiAttached'],
            },
            toolPanel: {
                mandatoryMethodList: [],
                optionalMethodList: ['refresh', 'afterGuiAttached']
            },
            tooltipComponent: {
                mandatoryMethodList: [],
                optionalMethodList: []
            }
        };
    }
    retrieve(name) {
        return this.componentMetaData[name];
    }
};
__decorate([
    context_1.Autowired("agComponentUtils")
], ComponentMetadataProvider.prototype, "agComponentUtils", void 0);
__decorate([
    context_1.PostConstruct
], ComponentMetadataProvider.prototype, "postConstruct", null);
ComponentMetadataProvider = __decorate([
    context_1.Bean("componentMetadataProvider")
], ComponentMetadataProvider);
exports.ComponentMetadataProvider = ComponentMetadataProvider;

//# sourceMappingURL=componentMetadataProvider.js.map