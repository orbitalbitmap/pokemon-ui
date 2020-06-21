/* eslint-disable import/prefer-default-export */
import axios from 'axios'

export const fetchPokemon = async (id) => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/generation/${id}`) // eslint-disable-line no-undef

    return data
  } catch (error) {
    return []
  }
}
