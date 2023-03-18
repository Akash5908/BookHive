import axios from '../lib/axiosConfig'

export const getBestsellers = async (query) => {
	try {
		const { data } = await axios.get('/books/bestsellers', { params: query })
		return data
	} catch (error) {
		return error.response && error.response.data.error_message
			? error.response.data.error_message
			: error.message
	}
}

export const getTopAudiobooks = async (query) => {
	try {
		const { data } = await axios.get('/books/audiobooks', { params: query })
		return data
	} catch (error) {
		return error.response && error.response.data.error_message
			? error.response.data.error_message
			: error.message
	}
}

export const getLatestBooks = async (query) => {
	try {
		const { data } = await axios.get('/books/latest/', { params: query })
		return data
	} catch (error) {
		return error.response && error.response.data.error_message
			? error.response.data.error_message
			: error.message
	}
}

export const getIndianBooks = async (query) => {
	try {
		const { data } = await axios.get('/books/indian/', { params: query })
		return data
	} catch (error) {
		return error.response && error.response.data.error_message
			? error.response.data.error_message
			: error.message
	}
}

export const searchBooks = async (query) => {
	try {
		const { data } = await axios.get('/books/search', { params: query })
		return data
	} catch (error) {
		return error.response?.data.error_message
			? error.response.data.error_message
			: error.message
	}
}

export const getSimilarBooks = async (bookId, query) => {
	try {
		const { data } = await axios.get(`/books/${bookId}/similar/`, { params: query })
		return data
	} catch (error) {
		return error.response?.data.error_message
			? error.response.data.error_message
			: error.message
	}
}

export const getBookDetails = async (bookId) => {
	try {
		const { data } = await axios.get(`/books/${bookId}`)
		return data
	} catch (error) {
		return error.response?.data.error_message
			? error.response.data.error_message
			: error.message
	}
}

export const createBookReview = async (bookId, review) => {
	try {
		// const  { userInfo } or cookie = getState()
		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		}
		const { data } = await axios.post(`/books/${bookId}/reviews/`, review, config)
		return data
	} catch (error) {
		return error.response?.data.error_message
			? error.response.data.error_message
			: error.message
	}
}