import React from 'react';

const ProductDetails = ({ product }) => {
    const { image, title, id, category, rating } = product;
    return (
        <tr style={{ textAlign: "start" }}>
            <td>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">

                    </label>
                </div>
            </td>
            <td><img style={{ height: "20px", width: "20px" }} src={image} alt="" /></td>
            <td >{title.slice(0, 12)}</td>
            <td>Code: {id}</td>
            <td>Catagory: {category}</td>
            <td>Rating: {rating.rate}</td>
            <td><button type="button" class="btn btn-light py-0 btn-sm rounded-pill text-danger">Published</button></td>
        </tr>
    );
};

export default ProductDetails;