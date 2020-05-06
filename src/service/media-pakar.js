import axios from 'axios'

export class MediaPakar {
	constructor() {}
	
	getGejala() {
		let data = axios.get('data/gejala-list.json').then(response => response.data);
		return data
	}
	
	getPenyakit() {
		let data = axios.get('data/penyakit-list.json').then(response => response.data);
		return data
	}
	
	getSolusi() {
		let data = axios.get('data/solusi-list.json').then(response => response.data);
		return data
	}
}
