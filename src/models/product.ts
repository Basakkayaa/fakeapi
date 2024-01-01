import { Image } from "./image";

export interface Product {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedPrice: number;
    thumbnail: string;
    description: string;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    images: Image[];
}
//       {
//         "id": 59,
//         "title": "Spring and summershoes",
//         "price": 20,
//         "quantity": 3,
//         "total": 60,
//         "discountPercentage": 8.71,
//         "discountedPrice": 55,
//         "thumbnail": "https://i.dummyjson.com/data/products/59/thumbnail.jpg"
// },