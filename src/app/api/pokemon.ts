import useAxios from '@/utils/axios'

export const getPokemonIndex = async () => {
  try {
    const { data } = await useAxios.get('http://localhost:3000/api/pokemon')
    const details = await Promise.all(data?.results?.map(async (item: any) => {
      return {
        name: item.name,
        ...await getPokemonDetails(item.url)
      }
    }))
    return details
  } catch (e) {
    console.error(e)
    return []
  }
}

const getPokemonDetails = async (url: string) => {
  try {
    const { data } = await useAxios.get(url)
    return {
      id: data.id,
      types: data.types,
      sprite_front_default: data?.sprites?.front_default
    }
  } catch (e) {
    console.error(e)
    return null
  }
}