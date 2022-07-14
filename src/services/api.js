import axios from "axios";

// ?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

axios.defaults.baseURL = " https://pixabay.com/api/";
const API_KEY = "25748459-63f23aee85add1030efa422f3"


// /?q=catpage=1&key=25748459-63f23aee85add1030efa422f3image_type=photo&orientation=horizontal&per_page=12

export const fetchImagesWithQuery = async searchQuery => {
    const response = axios.get(`/?q=${searchQuery}page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    return response.data;
};

