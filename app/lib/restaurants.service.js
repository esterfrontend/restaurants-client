export async function fetchAllRestaurants() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/restaurants/getAll`)

        if (res.ok) {
            const jsonData = await res.json();
            return jsonData;
        } else {
            throw new Error('Error al obtener los datos');
        }
    } catch (error) {
        throw error;
    }
}

export async function fetchOneRestaurant(restaurant_id) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/restaurants/getOne/${restaurant_id}`)
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}

export async function fetchCreateRestaurant(data) {    
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/restaurants/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}