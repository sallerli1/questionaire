import academyList from '../data/academy-class.js'
import exportData from '../data/data.js'

let academies = Object.keys(academyList)

export default {
    selector: '#academy-class-input',
    template: 
        '<select class="academy-input" value="{{currentAcademy}}" bind-change="handleAcademyChange">\
            <option data-for="academies">{{item}}</option>\
        </select>\
        <select bind-change="handleClassChange">\
            <option data-for="classList">{{item}}</option>\
        </select>',

    data: {
        currentAcademy: "人文与外国语学院",
        academies,
        classList: []
    },

    methods: {
        handleAcademyChange(event, data) {
            let value = event.target.value
            data.currentAcademy = value
            data.classList = academyList[value]
            exportData.info.academyName = value
            exportData.info.className = data.classList[0]
        },

        handleClassChange(event, data) {
            exportData.info.className = event.target.value
        }
    },

    mounted() {
        this.data.classList = academyList[this.data.currentAcademy]
        exportData.info.academyName = this.data.currentAcademy
        exportData.info.className = this.data.classList[0]
    },

    updated() {
        let select = this.element.querySelector('.academy-input')

        for (const option of select.options) {
            if (option.value == this.data.currentAcademy) {
                option.selected = true
            }
        }
    }
}