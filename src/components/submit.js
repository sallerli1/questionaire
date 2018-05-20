import Component from '../main.js'
import {data} from './answers'
import {get, post} from '../request'

export default new Component({
    selector: '#submit',
    template: `<a bind-touchstart='submit'>{{text}}</a>`,
    data: {
        text: "提交",
        url: 'http://yiban.xaut.edu.cn/weixin/admin/web/common/question2'
    },
    methods: {
        submit() {
            if (data.percent>=100) {
                post(this.data.url, data.answers).then((res) => {
                    if (res.success) {
                        alert('提交成功')
                    } else {
                        alert(res.error.code)
                    }
                }).catch(() => {
                    alert('未知网路错误')
                })
            } else {
                alert('请填写全部问卷')
            }         
        }
    }
})

