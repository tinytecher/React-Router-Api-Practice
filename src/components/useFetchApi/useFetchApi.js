import { useState, useEffect } from "react";

// NOTES - DAD JOKE API NEEDED ATTACHED HEADER SEE LINK AT BOTTOM

const useFetchApi = (url) => {
	const [response, setResponse] = useState([]);
const [ranNum, setRanNum] = useState(1);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(url, {
				headers: {
					Accept: "application/json",
				},
			});
			const json = await res.json();
			setResponse(json);
			// console.log("from fetch api hook", json);
		};
		fetchData();
	}, [url, ranNum]);
	return [response, setRanNum] ;
};

export default useFetchApi;