import Component from '../main.js'
import data from '../data/data.js'

let progress = {
    selector: '#progress',
    template: '<div style="width:{{percent}}%"></div>',
    data: {
        percent: data.percent
    }
}

Component.proxy(data, progress.data, 'percent', 'percent')
export default progress

