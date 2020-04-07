import Vue from 'vue'
import Vuex from 'vuex'
import musations from './mutations';
import actions from './actions';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        swipeImgs: [],
        boxList: [],
        skillIcons: [],
    },
    mutations: musations,
    actions: actions
})
