import {$} from '@core/dom'
import {ExcelComponent} from "@core/ExcelComponent";

export class Formula extends ExcelComponent{

    static className = 'excel__formula'

    constructor($root, options){
        super($root, {
            name: 'Formula',
            listeners: ['input', 'click', 'keydown'],
            ...options
        })
    }

    toHTML(){
        return `
        <div class="info">fx</div>
        <div id="formula" class="input" contenteditable spellcheck="false">
        </div>
        `
    }

    init(){
        super.init()
        this.$target = this.$root.find('#formula')
        this.$on('table:select', $cell => this.$target.text($cell.text()))
        this.$on('table:text', $cell => this.$target.text($cell.text()))

    }

    onInput(event){
        this.$emit('formula:text', $(event.target).text())
    }

    onKeydown(event){
        const key = ['Enter', 'Tab']

        if (key.includes(event.key)){
            event.preventDefault()
            this.$emit('formula:done')
        }
    }

    onClick(){
        
    }

   
} 