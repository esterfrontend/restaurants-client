export async function fetchSignup(data) {    
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
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

export async function fetchLogin(data) {    
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
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

export async function fetchProfile(token) {    
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/getprofile`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
   
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
   
    return res.json()
}