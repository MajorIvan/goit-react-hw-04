import axios from "axios";

const fetchImages = async (query, page) => {
    const accessKey = "piE9EcbbHjRxyOxFyLQbzpSYxKOax2U8dY2kGWHPIuw";
    const response = await axios.get(
        `https://api.unsplash.com/search/photos/?client_id=${accessKey}`, {
            params: { query, page, per_page: 20 }});

    return response.data;
}

export default fetchImages;