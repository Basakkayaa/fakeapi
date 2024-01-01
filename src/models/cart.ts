import { Product } from "./product";

export interface Cart {
    id: number;
    products: Product[];
}

// {
//     "id": 1,
//     "products": [
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