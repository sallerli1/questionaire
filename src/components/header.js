import Component from '../main.js'

export default Component({
    selector: '#header',
    template: `<h1  class="header_top">
    <span>{{title}}</span>
</h1>
<article class="header_bottom">
    <span>{{hint}}</span>
</article>`,
    data: {
        title: '西安理工大学',
        hint: '2017-2018学年本科生导师工作情况调查问卷',
        list: [{
            name: 'saller',
            age: '11'
        }, {
            name: 'saller1',
            age: '22'
        }]
    }
})