const API_URL = 'https://api.opendota.com/api/players/'

export const getUser = async (query) => {
    const url = API_URL + query
    const response = await fetch(url)

    if(!response.ok) return ''

    const data = await response.json()
    // Desestructurar el objeto data para seleccionar solo las propiedades definidas en el interfaz User
    const { rank_tier, profile } = data;

    // Crear un nuevo objeto solo con las propiedades que necesitas
    const userData = {
        rank_tier,
        profile,
    };

    return userData
}