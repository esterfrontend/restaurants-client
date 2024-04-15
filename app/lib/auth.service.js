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