import { createRouter,createWebHashHistory } from "vue-router";
import RusIaz from "./components/RusIaz.vue";
import MaIne from "./components/MaIne.vue";
import AboutMe from "./components/AboutMe.vue"
import M from "./components/MaTh.vue"
import C from "./components/CheMistry.vue"
import inf from "./components/InforNat.vue"


export default createRouter ({
    history: createWebHashHistory(),
    routes: [
        { path: '/RusIaz',name: 'RusIaz', component: RusIaz },
        {path: '/',name:'home' ,component:MaIne},
        {path: '/AboutMe',name:'AboutMe' ,component:AboutMe},
        {path: '/MaTh',name:'MaTh' ,component:M},
        {path: '/Chemistry',name:'CheMistry' ,component:C},
        {path: '/informatics',name:'Inform' ,component:inf},

    ]
})
