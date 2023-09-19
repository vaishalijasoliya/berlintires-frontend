export const fetchData = async (endpoint) => {
    const url = process.env.NEXT_PUBLIC_API_URL;
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

    const options = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const res = await fetch(`${url}${endpoint}`, options);

        if (!res.ok) {
            throw new Error(`Fetch request failed with status ${res.status}`);
        }

        const data = await res.json();

        return data;
    } catch (error) {
        console.error('Error Fetching Data:', error.message);
        throw error;
    }
};
