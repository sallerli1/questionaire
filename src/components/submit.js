
import data from '../data/data.js'
import {get, post} from '../request.js'

export default {
    selector: '#submit',
    template: `<a bind-touchstart='submit'>{{text}}</a>`,
    data: {
        submited: false,
        text: "提交",
        url: 'http://yiban.xaut.edu.cn/weixin/question/submit.php'
    },
    methods: {
        submit() {
            if (data.percent>=100 && data.info.tutorName) {

                if (this.data.submited) {
                    alert('请勿重复提交') 
                    return
                }

                let reqData = {}
                reqData.answers = data.answers
                reqData.info = data.info

                post(this.data.url, reqData).then((res) => {
                    if (res.success) {
                        alert('提交成功')
                    } else {
                        alert(res.error.msg)
                    }
                }).catch((err) => {
                    alert('未知网路错误')
                })
            } else if (!data.info.tutorName) {
                alert('请填写导师姓名')
            } else {
                alert('请完成问卷')
            }
        }
    }
}

