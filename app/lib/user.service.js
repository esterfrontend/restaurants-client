import AxiosConfig from ".";

class UserService extends AxiosConfig {
    constructor() {
        super('user')
    }

    async fetchGetFavouriteRestaurants() {
        const token = this.getToken()
        const res = await this.axios.post("/getFavouriteRestaurants/",
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        )
        return res.data
    }

    async fetchLikeRestaurant(restaurant_id) {
        const token = this.getToken()
        const res = await this.axios.put(`/likeRestaurant/${restaurant_id}`,
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        )
        return res.data
    }

    async fetchDislikeRestaurant(restaurant_id) {
        const token = this.getToken()
        const res = await this.axios.put(`/dislikeRestaurant/${restaurant_id}`,
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        )
        return res.data
    }
}

export default new UserService()