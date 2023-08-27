const API_KEY = '6095343-d47de4ae86d54fd6f681d759d';
const BASE_URL = 'https://pixabay.com/api/';
const BASE_TYPE = 'photo';
const PER_PAGE = '12';
const BASE_ORIENTATION = 'horizontal';

export const getImages = async ({ strQuery='', page = 1 }) => {

  console.log('getting string', strQuery);

  const params = new URLSearchParams({
    key: API_KEY,
    q: strQuery,
    image_type: BASE_TYPE,
    orientation: BASE_ORIENTATION,
    per_page: PER_PAGE,
    page: page,
  });

  const response = await fetch(`${BASE_URL}?${params}`);
  console.log(`${BASE_URL}?${params}`);

  if (!response.ok) {
    throw new Error('smth went wrong')
  }

  return response.json();
  
}