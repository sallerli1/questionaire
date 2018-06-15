import academyList from "../data/academy-class.js";
import exportData from "../data/data.js";
import { get } from "../request.js";

let academies = Object.keys(academyList);

academies.forEach(academy => {
    academyList[academy].push("自己填写")
});

export default {
    selector: "#academy-class-input",
    template:
        '<div class="input-row">\
            <div class="input-col">\
                <select class="academy-input" bind-change="handleAcademyChange">\
                    <option data-for="academies">{{item}}</option>\
                </select>\
            </div>\
            <div class="input-col">\
                <select class="class-input" bind-change="handleClassChange">\
                    <option data-for="classList">{{item}}</option>\
                </select>\
            </div>\
        </div>\
        <div class="input-row">\
            <div class="input-col">\
                <input class="academy-input" type="text" bind-input="handleAcademyInput" data-if="showAcademyInput" />\
            </div>\
            <div class="input-col">\
                <input class="class-input" type="text" bind-input="handleClassInput" data-if="showClassInput" />\
            </div>\
        </div>',

    data: {
        currentAcademy: "人文与外国语学院",
        currentClass: "英141",
        showAcademyInput: true,
        showClassInput: true,
        display: false,
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

        handleAcademyInput(event, data) {
            exportData.info.academyName = event.target.value;
        },

        handleClassInput(event, data) {
            exportData.info.className = event.target.value;
        },

        handleClassChange(event, data) {
            data.currentClass = event.target.value;
            exportData.info.className = event.target.value;
            this.methods.toggleDisplay();
        },

        loadInfo() {
            return get(
                "http://yiban.xaut.edu.cn/weixin/question/getinfo.php"
            ).then(res => {
                if (res.success) {
                    if (res.data) {
                        this.data.currentAcademy = res.data.college || '人文与外国语学院';
                        this.data.currentClass = res.data.class || '英141';
                    }
                }
            }).catch(() => {});
        },

        toggleDisplay() {
            if (this.data.currentAcademy === "自己填写") {
                this.data.showAcademyInput = true
                exportData.info.academyName = ""
            } else {
                this.data.showAcademyInput = false
            }

            if (this.data.currentClass === "自己填写") {
                this.data.showClassInput = true
                exportData.info.className = ""
            } else {
                this.data.showClassInput = false
            }
        }
    },

    mounted() {
        this.methods.loadInfo().then(() => {
            this.data.classList = academyList[this.data.currentAcademy];
            exportData.info.academyName = this.data.currentAcademy;
            exportData.info.className = this.data.currentClass;
            this.methods.toggleDisplay();
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
