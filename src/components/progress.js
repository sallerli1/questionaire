import Component from '../main.js'
import data from '../data/data.js'

let progress = new Component({
    selector: '#progress',
    template: '<div style="width:{{percent}}%"></div>',
    data: {
        percent: data.percent
    }
})

export default progress

Component.proxy(data, progress.data, 'percent', 'percent')