
import data from '../data/data.js'
import {get, post} from '../request.js'

export default {
    selector: '#submit',
    template: `<a bind-touchstart='submit'>{{text}}</a>`,
    data: {
        text: "提交",
        url: 'http://yiban.xaut.edu.cn/weixin/question/submit.php'
    },
    methods: {
        submit() {
            if (data.percent>=100) {

                let reqData = data.answers
                reqData.tutorName = data.tutorName

                post(this.data.url, reqData).then((res) => {
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
}

