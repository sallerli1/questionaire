import Component from '../main.js'
import exportData from '../data/data.js'

export default {
    selector: '.tutorNameInput',
    data: {
        label: '导师姓名:'
    },
    template: `<label for="tutorName">{{label}}</label>
    <input bind-input='onInput' name="tutorName" id="tutorName" type="text" />`,
    methods: {
        onInput(event, data) {
            exportData.info.tutorName = event.target.value
        }
    }
}