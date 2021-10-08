export const fetchProductDetails = async (productId: string) =>{
    const data = await fetch(`http://localhost:3001/products/${productId}`)
    return await data.json()
} 