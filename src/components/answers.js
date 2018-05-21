import Component from '../main.js'
import exportData from '../data/data.js'

const singles = [{
    selector: '.question._1',
    data: {
        index: 1,
        title: '您的性别',
        answers: [{
            icon: 'iconfont icon-radio02',
            name: 'gender',
            value: 'A',
            text: '男',
            checked: false
        }, {
            icon: 'iconfont icon-radio02',
            name: 'gender',
            value: 'B',
            text: '女',
            checked: false
        }]
    }
}, {
    selector: '.question._2',
    data: {
        index: 2,
        title: '您的性别',
        answers: [{
            icon: 'iconfont icon-radio02',
            name: 'another-gender',
            value: 'A',
            text: '男',
            checked: false
        }, {
            icon: 'iconfont icon-radio02',
            name: 'another-gender',
            value: 'B',
            text: '女',
            checked: false
        }]
    }
}]

const multiples = [{
    selector: '.question._3',
    data: {
        index: 3,
        title: '喜欢的水果',
        answers: [{
            icon: 'iconfont icon-checkboxblank',
            name: 'fruit',
            value: 'A',
            text: '苹果',
            checked: false
        }, {
            icon: 'iconfont icon-checkboxblank',
            name: 'fruit',
            value: 'B',
            text: '李子',
            checked: false
        }, {
            icon: 'iconfont icon-checkboxblank',
            name: 'fruit',
            value: 'C',
            text: '梨',
            checked: false
        }, {
            icon: 'iconfont icon-checkboxblank',
            name: 'fruit',
            value: 'D',
            text: '石榴',
            checked: false
        }, {
            icon: 'iconfont icon-checkboxblank',
            name: 'fruit',
            value: 'E',
            text: '西瓜',
            checked: false
        }]
    }
}]

let singleComs = [],
    multipleComs = []

for (const question of singles) {
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

            data.checked = true
            if (data.checked) {
                data.selected = 'selected'
                data.icon = 'iconfont icon-radio01'
            } else {
                data.selected = ''
                data.icon = 'iconfont icon-radio02'
            }

            exportData.percent = calcProgress()
        }
    }

    singleComs.push(new Component(question))
}

for (const question of multiples) {
    question.template = `<h2 class="questionName">
    <p>{{title}}</p>
</h2>
<div class="answers">
    <div class="answerFrame" data-for="answers">
        <div class="answer {{selected}}" bind-touchend='click' bind-touchmove='setFlag'>
            <input type="checkbox" value="{{value}}" name="{{name}}" checked='{{checked}}' />
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

            if (!exportData.answers[this.data.index]) {
                exportData.answers[this.data.index] = ''
            }

            data.checked = !data.checked

            if (data.checked) {
                exportData.answers[this.data.index] += data.value
                data.selected = 'selected'
                data.icon = 'iconfont icon-checkbox'
            } else {
                exportData.answers[this.data.index] = exportData.answers[this.data.index]
                    .split('')
                    .filter((value) => {
                        return value !== data.value
                    })
                    .join('')

                if (exportData.answers[this.data.index] === '') {
                    delete exportData.answers[this.data.index]
                }

                data.selected = ''
                data.icon = 'iconfont icon-checkboxblank'
            }

            exportData.percent = calcProgress()
        }
    }

    multipleComs.push(new Component(question))
}

function calcProgress() {
    return (Object.keys(exportData.answers).length / (singles.length + multiples.length)) * 100
}

export const singleQuestions = singleComs
export const multiplesQuestions = multipleComs