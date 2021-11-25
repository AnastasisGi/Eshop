import data from "../data";
import Product from "../components/Product";


import React from 'react'

export default function HoneScreen() {
    return (
          <div className="row center">

            {data.prodcucts.map(product=>(


                    <Product key={product._id} product={product}/>


            ))}

            </div>
    )
}
