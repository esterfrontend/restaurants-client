import AxiosConfig from ".";

class RestaurantService extends AxiosConfig {
    constructor() {
        super('restaurants')
    }

    async fetchAllRestaurants() {
        try {
            const res = await this.axios.get("/getAll")
            
            if (res.status === 200) {
                return res.data;
            } else {
                throw new Error('Error al obtener los datos');
            }
        } catch (error) {
            throw error;
        }
    }

    async fetchOneRestaurant(restaurant_id) {
        const res = await this.axios.get(`/getOne/${restaurant_id}`)

        if (res.status !== 200) {
          throw new Error('Failed to fetch data')
        }
       
        return res.data
    }

    async fetchCreateRestaurant(data) {
        const res = await this.axios.post("/create/", data)
       
        return res.data
    }

    async fetchDeleteRestaurant(restaurant_id) {
        const res = await this.axios.delete(`/delete/${restaurant_id}`)
       
        return res.data
    }
}

export default new RestaurantService()