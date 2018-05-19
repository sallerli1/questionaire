import Component from '../main.js'

const exportData = {
    answers: {},
    percent: 0
}

const questions = [{
    selector: '.question._1',
    data: {
        index: 1,
        title: '您的性别',
        answers: [{
            icon: 'iconfont icon-radio02',
            name: '1',
            value: 'A',
            text: '男',
            checked: false
        }, {
            icon: 'iconfont icon-radio02',
            name: '1',
            value: 'B',
            text: '女',
            checked: false
        }]
    }
},{
    selector: '.question._2',
    data: {
        index: 2,
        title: '您的性别',
        answers: [{
            icon: 'iconfont icon-radio02',
            name: '1',
            value: 'A',
            text: '男',
            checked: false,
            selected: ''
        }, {
            icon: 'iconfont icon-radio02',
            name: '1',
            value: 'B',
            text: '女',
            checked: false,
            selected: ''
        },{
            icon: 'iconfont icon-radio02',
            name: '1',
            value: 'B',
            text: '女hahahahahahhahahahhahahahahhah',
            checked: false,
            selected: ''
        },{
            icon: 'iconfont icon-radio02',
            name: '1',
            value: 'B',
            text: '女',
            checked: false,
            selected: ''
        },{
            icon: 'iconfont icon-radio02',
            name: '1',
            value: 'B',
            text: '女',
            checked: false,
            selected: ''
        }]
    }

}, {
    selector: '.question._3',
    data: {
        index: 3,
        title: '您的性别',
        answers: [{
            icon: 'iconfont icon-radio02',
            name: '1',
            value: 'A',
            text: '男',
            checked: false
        }, {
            icon: 'iconfont icon-radio02',
            name: '1',
            value: 'B',
            text: '女',
            checked: false
        }]
    }
}]

let questionComponents = []

for (const question of questions) {
    question.template = `<h2 class="questionName">
    <p>{{title}}</p>
</h2>
<div class="answers">
    <div class="answerFrame" data-for="answers">
        <div class="answer {{selected}}" bind-touchend='click' bind-touchmove='setFlag'>
            <input type="radio" value="{{value}}" name="{{name}}" checked='{{checked}}' />
            <i class='{{icon}}'></i>
            <p>{{text}}</p>
        </div>
    </div>
</div>`
    question.methods = {
        setFlag(event, data) {
            this.data.moved = true;
        },
        click(event, data) {
            if (this.data.moved) {
                this.data.moved = false
                return
            }
            event.cancelBubble = true
            event.preventDefault()
            event.stopImmediatePropagation()
            for (const answer of this.data.answers) {
                answer.checked = false
                if (answer.checked) {
                    answer.selected = 'selected'
                    answer.icon = 'iconfont icon-radio01'
                } else {
                    answer.selected = ''
                    answer.icon = 'iconfont icon-radio02'
                }
            }

            exportData.answers[this.data.index] = data.value
            exportData.percent = calcProgress()
            data.checked = true
            if (data.checked) {
                data.selected = 'selected'
                data.icon = 'iconfont icon-radio01'
            } else {
                data.selected = ''
                data.icon = 'iconfont icon-radio02'
            }
        }
    }
    
    questionComponents.push(new Component(question))
}

function calcProgress() {
    return (Object.keys(exportData.answers).length / questions.length) * 100
}

export const questionComs = questionComponents
export const data = exportData