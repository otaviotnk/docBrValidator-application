import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//Tendo um true, o resto tem que ser false (criar método que faz isso)

export default new Vuex.Store({

    state: {
        showHome: true,
        showGettingStarted: false,
        showAbout: false,
        showCpf: false,
        showRg: false,
        showCnh: false,
        showTituloEleitor: false,
        showPis: false,
        showCnpj: false,
        showIe: false
    },
    getters: {
        getShowGettingStarted(state) {
            return state.showGettingStarted
        },
        getShowAbout(state) {
            return state.showAbout
        },
        getShowHome(state) {
            return state.showHome
        },
        getShowCpf(state) {
            return state.showCpf
        },
        getShowRg(state) {
            return state.showRg
        },
        getShowCnh(state) {
            return state.showCnh
        },
        getShowTituloEleitor(state) {
            return state.showTituloEleitor
        },
        getShowPis(state) {
            return state.showPis
        },
        getShowCnpj(state) {
            return state.showCnpj
        },
        getShowIe(state) {
            return state.showIe
        },
    },
    mutations: {
        changeGettingStartedStatus(state, status) {
            Object.keys(state).forEach(function(key){ state[key] = false });
            state.showGettingStarted = status
        },
        changeHomeStatus(state, status) {
            if (status == false) return
            Object.keys(state).forEach(function(key){ state[key] = false });
            state.showHome = status
        },
        changeAboutStatus(state, status) {            
            if (status == false) return
            Object.keys(state).forEach(function(key){ state[key] = false });
            state.showAbout = status
        },
        changeCpfStatus(state, status) {
            if (status == false) return
            Object.keys(state).forEach(function(key){ state[key] = false });

            state.showCpf = status
        },
        changeRgStatus(state, status) {
            if (status == false) return
            Object.keys(state).forEach(function(key){ state[key] = false });
            state.showRg = status
        },
        changeCnhStatus(state, status) {
            if (status == false) return
            Object.keys(state).forEach(function(key){ state[key] = false });
            state.showCnh = status
        },
        changeTituloEleitorStatus(state, status) {
            if (status == false) return
            Object.keys(state).forEach(function(key){ state[key] = false });
            state.showTituloEleitor = status
        },
        changePisStatus(state, status) {
            if (status == false) return
            Object.keys(state).forEach(function(key){ state[key] = false });
            state.showPis = status
        },
        changeCnpjStatus(state, status) {
            if (status == false) return
            Object.keys(state).forEach(function(key){ state[key] = false });
            state.showCnpj = status
        },
        changeIeStatus(state, status) {
            if (status == false) return
            Object.keys(state).forEach(function(key){ state[key] = false });
            state.showIe = status
        },
    }
})