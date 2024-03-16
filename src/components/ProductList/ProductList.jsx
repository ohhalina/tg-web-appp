import React, {useCallback, useEffect, useState} from 'react';
// import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";

// const products = [
//     {id: '1', title: 'Картина 1', price: 500, description: 'Красивая'},
//     {id: '2', title: 'Картина 1', price: 700, description: 'Красивая'},
//     {id: '3', title: 'Картина 1', price: 900, description: 'Красивая'},
//     {id: '4', title: 'Картина 1', price: 200, description: 'Красивая'},
//     {id: '5', title: 'Картина 1', price: 300, description: 'Красивая'},
//     {id: '6', title: 'Картина 1', price: 400, description: 'Красивая'},
//     {id: '7', title: 'Картина 1', price: 500, description: 'Красивая'},
//     {id: '8', title: 'Картина 1', price: 950, description: 'Красивая'},
//     {id: '9', title: 'Картина 1', price: 550, description: 'Красивая'},
//     {id: '10', title: 'Картина 1', price: 400, description: 'Красивая'},
// ]

// const getTotalPrice = (items = []) => {
//     return items.reduce((acc, item) => {
//         return acc += item.price
//     }, 0)
// }
//
// const onSendData = useCallback( () => {
//     const data = {
//         products: addedItems,
//         totalPrice: getTotalPrice(addedItems),
//     }
//     fetch('https://localhost:3000', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data)
//     })
// }, [])
//
// useEffect(() => {
//     tg.onEvent('mainButtonClicked', onSendData)
//     return () => {
//         tg.offEvent('mainButtonClicked', onSendData)
//     }
// }, [onSendData()]);
//
// const ProductList = () => {
//     const [addedItems, setAddedItems] = useState([]);
//     const {tg} = useTelegram();
//
//
//     const onAdd = (product) => {
//         const alreadyAdded = addedItems.find(item => item.id === product.id);
//         let newItems = [];
//
//         if(alreadyAdded) {
//             newItems = addedItems.filter(item => item.id !== product.id);
//         } else {
//             newItems = [...addedItems, product];
//         }
//
//         setAddedItems(newItems)
//
//         if(newItems.length === 0) {
//             tg.MainButton.hide();
//         } else {
//             tg.MainButton.show();
//             tg.MainButton.setParams({
//                 text:  `Купить ${getTotalPrice(newItems)}`
//             })
//         }
//     }
//
//     return (
//         <div className={'list'}>
//             {products.map(item => (
//                 <ProductItem
//                 product={item}
//                 onAdd={onAdd}
//                 className={'item'}
//                 />
//             ))}
//
//         </div>
//     );
// };

// export default ProductList;