const URL = 'https://pixabay.com/api/videos/';
const KEY = '11240134-58b8f655e9e0f8ae8b6e8e7de';
const FILTER = '&order=popular&per_page=12&video_type=film';

const fetchImages = async (query, page = 1) => {
  const response = await fetch(
    `${URL}?q=${query}&page=${page}&key=${KEY}${FILTER}`
  );
  return await response.json();
};

export default fetchImages;
