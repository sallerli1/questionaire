
import exportData from '../data/data.js'

const singles = [{
    selector: '.question._1',
    data: {
        index: 1,
        title: '1：你是否清楚你导师的联系方式和办公室地址',
        answers: [{
            name: '1',
            value: 'A',
            text: '十分清楚',
        }, {
            value: 'B',
            text: '大概清楚',
        },{
            value: 'C',
            text: '不太清楚'
        }, {
            value: 'D',
            text: '完全不知道'
        }]
    }
}, {
    selector: '.question._2',
    data: {
        index: 2,
        title: '2：本学年你的班级导师共召开班会情况',
        answers: [{
            name: '2',
            value: 'A',
            text: '每周或每月定期召开',
        }, {
            value: 'B',
            text: '2次以上',
        },{
            value: 'C',
            text: '1-2次'
        }, {
            value: 'D',
            text: '从没开过'
        }]
    }
}, {
    selector: '.question._3',
    data: {
        index: 3,
        title: '3：本学年你的导师深入学生宿舍情况',
        answers: [{
            name: '3',
            value: 'A',
            text: '每周来1次宿舍',
        }, {
            value: 'B',
            text: '每月来1-2次宿舍',
        },{
            value: 'C',
            text: '每学期来1-2次宿舍'
        }, {
            value: 'D',
            text: '没来过宿舍'
        }]
    }
}, {
    selector: '.question._4',
    data: {
        index: 4,
        title: '4：你的导师在学业方面对你有何指导和帮助',
        answers: [{
            name: '4',
            value: 'A',
            text: '提供学业指导、答疑和专业介绍、兴趣培养，对个人帮助很大',
        }, {
            value: 'B',
            text: '提供专业介绍和学业咨询，对个人有一定帮助',
        },{
            value: 'C',
            text: '偶尔有帮助'
        }, {
            value: 'D',
            text: '基本无帮助'
        }]
    }
}, {
    selector: '.question._5',
    data: {
        index: 5,
        title: '5：你的导师在生活方面对你有何指导与帮助',
        answers: [{
            name: '5',
            value: 'A',
            text: '关心个人生活并帮助解决生活上的难题，帮助很大',
        }, {
            value: 'B',
            text: '关心个人生活，嘘寒问暖，对个人有一定帮助',
        },{
            value: 'C',
            text: '偶尔有帮助'
        }, {
            value: 'D',
            text: '基本无帮助'
        }]
    }
}, {
    selector: '.question._6',
    data: {
        index: 6,
        title: '6：你的导师在心理关怀方面对你有何指导和帮助',
        answers: [{
            name: '6',
            value: 'A',
            text: '师生之间经常谈心交流，主动提供指导，对个人帮助很大',
        }, {
            value: 'B',
            text: '可以提供心理方面的指导，对个人有一定帮助',
        },{
            value: 'C',
            text: '偶尔有帮助'
        }, {
            value: 'D',
            text: '基本无帮助'
        }]
    }
}, {
    selector: '.question._7',
    data: {
        index: 7,
        title: '7: 导师对你的态度如何',
        answers: [{
            name: '7',
            value: 'A',
            text: '十分热情，循循善诱',
        }, {
            value: 'B',
            text: '比较热心，工作称职',
        },{
            value: 'C',
            text: '态度一般，偶尔过问'
        }, {
            value: 'D',
            text: '态度冷淡,不闻不问'
        }]
    }
}, {
    selector: '.question._8',
    data: {
        index: 8,
        title: '8：你认为导师与你的沟通效果如何',
        answers: [{
            name: '8',
            value: 'A',
            text: '双方都很主动，有良好交流',
        }, {
            value: 'B',
            text: '老师主动联系学生，提供指导并进行交流，但学生自己不主动',
        },{
            value: 'C',
            text: '学生主动找老师，能提供帮助，但不主动联系学生'
        }, {
            value: 'D',
            text: '双方均不主动，师生没有交流'
        }]
    }
}, {
    selector: '.question._9',
    data: {
        index: 9,
        title: '9：请问你对导师的工作是否满意',
        answers: [{
            name: '9',
            value: 'A',
            text: '很满意',
        }, {
            value: 'B',
            text: '满意',
        },{
            value: 'C',
            text: '一般'
        }, {
            value: 'D',
            text: '不满意'
        }]
    }
}]

const multiples = [/* {
    selector: '.question._3',
    data: {
        index: 3,
        title: '3：本学年你的班级导师共召开班会情况',
        answers: [{
            name: 'tutor-office',
            value: 'A',
            text: '每周或每月定期召开',
        }, {
            value: 'B',
            text: '2次以上',
        },{
            value: 'C',
            text: '1-2次'
        }, {
            value: 'D',
            text: '从没开过'
        }]
    }
} */]

const textQs = [{
    selector: '.question._10',
    data: {
        index: 10,
        title: "10：对导师工作有什么看法或建议？（可发表观点，或对改进导师工作提供一些具体的设想、措施等）"
    }
}]

for (const question of singles) {

    let name
    for (const answer of question.data.answers) {
        if (answer.name) name = answer.name
        answer.icon = 'iconfont icon-radio02'
        answer.name = name
        answer.checked = false
    }

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

            document.activeElement.blur();
        }
    }
}

for (const question of multiples) {

    let name
    for (const answer of question.data.answers) {
        if (answer.name) name = answer.name
        answer.icon = 'iconfont icon-checkboxblank',
        answer.checked = false
    }

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

            document.activeElement.blur();
        }
    }
}

for (const question of textQs) {

    question.template = '<label class="questionName">{{title}}</label>\
        <textarea bind-input="input"></textarea>'
    question.methods = {
        input(event, data) {
            event.cancelBubble = true
            event.preventDefault()
            event.stopImmediatePropagation()

            exportData.answers[this.data.index] = event.target.value

            if (exportData.answers[this.data.index] === '') {
                delete exportData.answers[this.data.index]
            }

            exportData.percent = calcProgress()
        }
    }
}

function calcProgress() {
    return (Object.keys(exportData.answers).length / (singles.length + multiples.length + textQs.length)) * 100
}

export const singleQuestions = singles
export const multipleQuestions = multiples
export const textQuestions = textQs