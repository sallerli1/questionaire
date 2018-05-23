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

            this.element.querySelector('.academy-input').options
            exportData.info.academyName = value
            console.log(exportData.info.academyName)
        },

        handleClassChange(event, data) {
            exportData.info.className = event.target.value
            console.log(exportData.info.className)
        }
    }
}