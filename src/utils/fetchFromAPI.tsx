import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
	method: "GET",
	url: BASE_URL,
	params: {
		maxResults: "50",
	},
	headers: {
		"X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
		"X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
	},
};

export const fetchFromAPI = async (url: string): Promise<Object> => {
	const { data } = await axios.get(`${BASE_URL}/${url}`, options);

	return data;
};
