import React, { useState, useEffect } from 'react';
import './RightSide.css'

import { CSVLink } from "react-csv";
import ProductDetails from './ProductDetails';

const RightSide = () => {
    const [products, setProducts] = useState([]);

    const getData = () => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(res => setProducts(res.slice(0, 10)));
    }

    useEffect(() => {
        getData();
    })
    return (
        <div className='Right'>
            <div className='Header'>
                {/* div1  start*/}
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                        <i class="fas fa-search" style={{ color: "#22D178" }}></i>
                        <input className='headerSearch' type="text" placeholder='Search' />
                    </div>
                    <div  >
                        <i class="fas fa-th"></i>
                        <i class="fas fa-bell" style={{ margin: "0 20px" }}></i>
                        <i class="fas fa-user-circle"></i>
                    </div>
                </div>
                {/* div1  end*/}


                {/* div2 start */}
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h3>Products</h3>
                    <div>
                        <button className='btn' style={{ marginRight: "15px" }}> <i class="fas fa-upload"></i> Import</button>

                        <CSVLink
                            data={products}
                            filename={"my-file.csv"}
                            target="_blank"
                        >
                            <button className='btn'> <i class="fas fa-download"></i> Export</button>
                        </CSVLink>

                    </div>
                </div>
            </div>
            {/* div2 end */}

            {/* div3 start */}
            <div className="content pt-4">
                <div className='box'>
                    <div class="dropdown">
                        <button class="btn border-0  filterButton dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Filter
                        </button>
                        <ul class="dropdown-menu ps-2" aria-labelledby="dropdownMenuButton1">
                            <li class="dropdown-item">Men</li>
                            <li class="dropdown-item">Women</li>
                            <li class="dropdown-item">Jewelery</li>
                        </ul>
                    </div>
                    <i class="fas fa-search"></i>
                    <input type="text" placeholder='Search products' />
                </div>

                <div>
                    <hr />
                    <table className="table" id="table-to-xls">

                        <tbody>
                            {products.length === 0 ? <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div> :
                                products.map((product) => <ProductDetails
                                    product={product}
                                >
                                </ProductDetails>
                                )}
                        </tbody>
                    </table>
                </div>



            </div>

            {/* div3 end */}

        </div>
    );
};

export default RightSide;