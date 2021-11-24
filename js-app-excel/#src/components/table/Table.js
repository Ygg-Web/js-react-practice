import { ExcelComponent } from "../../core/ExcelComponent";
import { resizeHandler } from "./table.resize";
import { createTable } from "./table.template";
import { shouldResize } from "./table.functions";


export class Table extends ExcelComponent {
    static className = 'excel__table'
    constructor(root) {
        super(root, {
            listeners: ['mousedown']
        })
    }
    toHTML() {
        return createTable(20)
    }

    onMousedown(event) {
        if (shouldResize(event)) {
            resizeHandler(this.root, event)
        }
    }


}