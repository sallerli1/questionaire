import Component from '../main.js'
import {data} from './answers'
import {get, post} from '../request'

export default new Component({
    selector: '#submit',
    template: `<a bind-touchstart='submit'>{{text}}</a>`,
    data: {
        text: "提交"
    },
    methods: {
        submit() {
            console.log(data)
        }
    }
})

