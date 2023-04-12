import React from 'react';

function Products({ product }) {
    if (product === "apple") {
        throw new Error("not found apples")
    }

    return (
        <div>
            {product}
        </div>
    )
}

export default Products;