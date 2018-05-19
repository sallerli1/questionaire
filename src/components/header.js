import Component from '../main.js'

export default new Component({
    selector: '#header',
    template: `<h1  class="header_top">
    <span>{{title}}</span>
</h1>
<article class="header_bottom">
    <span>{{hint}}</span>
</article>`,
    data: {
        title: '购物网用户满意度调查',
        hint: '为了给您提供更好的服务，希望您能抽出几分钟时间，将您的感受和建议告诉我们，我们非常重视每位用户的宝贵意见，期待您的参与！现在我们就马上开始吧！',
        list: [{
            name: 'saller',
            age: '11'
        }, {
            name: 'saller1',
            age: '22'
        }]
    }
})