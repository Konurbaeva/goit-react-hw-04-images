import axios from "axios";
import settings from "./constants";

const { BASE_URL, API_KEY } = settings;

export const fetchImagesWithQuery = async (searchQuery, per_page = 8, currentPage = 1) => {
    const response = await axios.get(BASE_URL, {
        params: {
            key: API_KEY,
            q: searchQuery,
            image_type: 'photo',
            orientation: 'horizontal',
            per_page: per_page,
            page: currentPage,
        }
    }
    )
    return response.data.hits
}

