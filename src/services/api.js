import axios from "axios";

axios.defaults.baseURL = " https://pixabay.com/api/";
const API_KEY = "25748459-63f23aee85add1030efa422f3"

export const fetchImagesWithQuery = async (searchQuery, per_page = 3) => {
    const response = await axios.get(
        `?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&per_page=${per_page}`
    )
    return response.data.hits
}