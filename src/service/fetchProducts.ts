export const fetchProducts = async (page: number) =>{
    const data = await fetch(`http://localhost:3001/products?_page=${page}&_limit=10`)
    return await data.json()
} 