import axios from 'axios'

export const state = {
	loading: true,
	gejalaList: [],
	penyakitList: [],
	solusiList: []
}

export const getters = {
	isLoading: (state) => {
		return state.loading
	},
	gejalaList: (state) => {
		return state.gejalaList
	},
	penyakitList: (state) => {
		return state.penyakitList
	},
	solusiList: (state) => {
		return state.solusiList
	}
}

export const mutations = {
	setLoading: function(state, value) {
		state.loading = value
	},
	setGejalaList: function(state, value) {
		state.gejalaList = value
	},
	setPenyakitList: function(state, value) {
		state.penyakitList = value
	},
	setSolusiList: function(state, value) {
		state.solusiList = value
	}
}

export const actions = {
	getGejalaList: function ({commit}) {
		console.log('calling action getGejalaList()')
		commit('setLoading', true)
		axios.get('data/gejala-list.json').then(function(response) {
			console.log('response ', response)
			commit('setLoading', false)
			let data = response.data.items
			commit('setGejalaList', data)
		}).catch(function(error) {
			console.log('error ', error)
			commit('setLoading', false)
		})
	},
	getPenyakitList: function ({commit}) {
		console.log('calling action getPenyakitList()')
		commit('setLoading', true)
		axios.get('data/penyakit-list.json').then(function(response) {
			console.log('response ', response)
			commit('setLoading', false)
			let data = response.data.items
			commit('setPenyakitList', data)
		}).catch(function(error) {
			console.log('error ', error)
			commit('setLoading', false)
		})
	},
	getSolusiList: function ({commit}) {
		console.log('calling action getSolusiList()')
		commit('setLoading', true)
		axios.get('data/solusi-list.json').then(function(response) {
			console.log('response ', response)
			commit('setLoading', false)
			let data = response.data.items
			commit('setSolusiList', data)
		}).catch(function(error) {
			console.log('error ', error)
			commit('setLoading', false)
		})
	}
}
