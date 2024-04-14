export async function fetchAllRestaurants() {
    try {
        const response = await fetch('http://localhost:3000/api/restaurants/getAll', { cache: 'force-cache' });
        if (response.ok) {
            const jsonData = await response.json();
            return jsonData;
        } else {
            throw new Error('Error al obtener los datos');
        }
    } catch (error) {
        throw error;
    }
}

export async function fetchOneRestaurant(restaurant_id) {
    const res = await fetch(`http://localhost:3000/api/restaurants/getOne/${restaurant_id}`, { cache: 'force-cache' })
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}