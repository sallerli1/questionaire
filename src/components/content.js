import Component from '../main.js'
import academyClassInput from './academy-class-input.js'
import tutorInput from './tutor-input.js'
import { singleQuestions, multipleQuestions, textQuestions } from './questions.js'
import submit from './submit.js'
import progress from './progress'

export default Component({
    selector: '#content',
    template: '<section id="academy-class-input">\
        </section>\
        <section class="tutorNameInput">\
        </section>\
        <section data-for="40" class="question _{{num}}">\
        </section>\
        <div id="submit">\
        </div>',
    data: {
    }
}).then(() => {
    Component(academyClassInput)
    Component(tutorInput)
}).then(() => {
    singleQuestions.forEach((question) => {
        Component(question)
    })

    multipleQuestions.forEach((question) => {
        Component(question)
    })

    textQuestions.forEach((question) => {
        Component(question)
    })
    
}).then(() => {
    Component(progress)
}).then(() => {
    Component(submit)
})