import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  '41256071-ed92c4fb3a3837c10316edc61';

export async function fetchBreeds() {
  return await axios
    .get('https://api.thedogapi.com/v1/breeds123')
    .then(response => response.data);
}

export async function fetchDogByBreed(breedId) {
  return await axios
    .get(`https://api.thedogapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data);
}