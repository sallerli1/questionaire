import Component from '../main.js'

export default Component({
    selector: '#header',
    template: `<h1 class="header_top">
    <span class="title">{{title}}</span>
    <span class="sub-title">{{sub_title}}</span>
</h1>
<article class="header_bottom">
    <span>{{hint}}</span>
</article>`,
    data: {
        title: '西安理工大学',
        sub_title: '2017-2018学年本科生导师工作情况调查问卷',
        hint: `同学: 
        你好！为了贯彻落实“围绕学生、关照学生、服务学生”的工作要求，充分发挥本科生导师在大学生教育管理服务工作中的积极作用，进一步了解我校2017-2018学年本科生导师工作的开展状况，学生工作部（处）特地组织本次调查。本次问卷将匿名统计，请同学们如实填写问卷，以期更好的改进工作，服务学生成长成才。
        感谢你的理解和支持！`,
        list: [{
            name: 'saller',
            age: '11'
        }, {
            name: 'saller1',
            age: '22'
        }]
    }
})