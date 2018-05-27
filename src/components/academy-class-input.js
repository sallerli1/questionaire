import academyList from "../data/academy-class.js";
import exportData from "../data/data.js";
import { get } from "../request.js";

let academies = Object.keys(academyList);

export default {
    selector: "#academy-class-input",
    template:
        '<select class="academy-input" value="{{currentAcademy}}" bind-change="handleAcademyChange">\
            <option data-for="academies">{{item}}</option>\
        </select>\
        <select class="class-input" bind-change="handleClassChange">\
            <option data-for="classList">{{item}}</option>\
        </select>',

    data: {
        currentAcademy: "",
        currentClass: "",
        academies,
        classList: []
    },

    methods: {
        handleAcademyChange(event, data) {
            let value = event.target.value;
            data.currentAcademy = value;
            data.classList = academyList[value];
            exportData.info.academyName = value;
            data.currentClass = data.classList[0];
            exportData.info.className = data.classList[0];
        },

        handleClassChange(event, data) {
            data.currentClass = event.target.value;
            exportData.info.className = event.target.value;
        },

        loadInfo() {
            return get(
                "http://yiban.xaut.edu.cn/weixin/question/getinfo.php"
            ).then(res => {
                console.log(res)
                if (res.success) {
                    this.data.currentAcademy = res.data.college;
                    this.data.currentClass = res.data.class;
                }
            });
        }
    },

    mounted() {
        this.methods.loadInfo().then(() => {
            this.data.classList = academyList[this.data.currentAcademy];
            exportData.info.academyName = this.data.currentAcademy;
            exportData.info.className = this.data.currentClass;
        });
    },

    updated() {
        let academyInput = this.element.querySelector(".academy-input"),
            classInput = this.element.querySelector(".class-input");

        for (const option of academyInput.options) {
            if (option.value == this.data.currentAcademy) {
                option.selected = true;
            }
        }

        for (const option of classInput.options) {
            if (option.value == this.data.currentClass) {
                option.selected = true;
            }
        }
    }
};
