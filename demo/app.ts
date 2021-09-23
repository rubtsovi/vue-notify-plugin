import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import VueNotifyPlugin from "@plugin/main"

import App from "./components/App.vue";


import "./styles/styles.css";
import "./styles/v-notify.scss";

library.add(faArrowRight);

Vue.component("FaIcon", FontAwesomeIcon);

Vue.use(VueNotifyPlugin);

const appRoot = document.createElement("div");
document.body.prepend(appRoot);

new Vue({
    el: appRoot,
    render: (h) => h(App)
});
