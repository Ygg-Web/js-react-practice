import { ExcelComponent } from "../../core/ExcelComponent";
import { resizeHandler } from "./table.resize";
import { createTable } from "./table.template";
import { shouldResize } from "./table.functions";
import { TableSelection } from "./TableSelection";

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

    prepare() {
        this.selection = new TableSelection()
    }

    init() {
        super.init()

        const cell = this.root.find('[data-id="0:0"]')
        this.selection.select(cell)
    }

    onMousedown(event) {
        if (shouldResize(event)) {
            resizeHandler(this.root, event)
        }
    }
}