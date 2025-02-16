import React from 'react'
import productData from './Data';
import Card from './Card/MediaCard'
const Products = () => {
    console.log(productData);

    return (
        <div>
            <h1>Product Page</h1>
            {
                productData && productData.map((e, i) => {
                    return (
                        <div>
                            <Card cardId={e.id} title={e.title} desc={e.description} imgSrc={e.image} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products
