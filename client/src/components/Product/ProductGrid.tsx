// components/ProductGrid.tsx
import React from 'react';
import ImageProduct1 from '../../assets/images/product-thumb-1.png';
import ImageProduct2 from '../../assets/images/product-thumb-1.png';
import ImageProduct3 from '../../assets/images/product-thumb-1.png';
import ImageProduct4 from '../../assets/images/product-thumb-1.png';
import ProductType1 from "../../assets/images/product-type-1.jpg";
import ProductType2 from "../../assets/images/product-type-2.jpg";
import ProductType3 from "../../assets/images/product-type-3.jpg";
import ProductType4 from "../../assets/images/product-type-4.jpg";

const products = [
    { name: 'Product 1', image: ImageProduct1, price: '100,000₫' },
    { name: 'Product 2', image: ImageProduct2, price: '120,000₫' },
    { name: 'Product 3', image: ImageProduct3, price: '120,000₫' },
    { name: 'Product 4', image: ImageProduct4, price: '120,000₫' },
    { name: 'Product 4', image: ImageProduct4, price: '120,000₫' },
    { name: 'Product 4', image: ImageProduct4, price: '120,000₫' },
    { name: 'Product 4', image: ImageProduct4, price: '120,000₫' },
    { name: 'Product 4', image: ImageProduct4, price: '120,000₫' },
    { name: 'Product 4', image: ImageProduct4, price: '120,000₫' },
    { name: 'Product 4', image: ImageProduct4, price: '120,000₫' },
    // Add more products as needed
];

const ProductGrid: React.FC = () => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px', padding: '10px 20px' }}>
            {products.map((product) => (
                // <div key={product.name} style={{ textAlign: 'center' }}>
                //     <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '8px' }} />
                //     <p>{product.name}</p>
                //     <p>{product.price}</p>


                <li className="product-card" key={product.name} style={{ textAlign: 'center', listStyle: 'none' }}>
                    <div className="product-image">
                        <a href="product-details.html">
                            <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '8px' }} className="product-thumb" data-src="public/images/t-shirt-chay-bo-basic.png" />
                        </a>
                        <div className="quickly-add-cart">
                            <p>Thêm nhanh vào giỏ hàng +</p>
                            <ul className="list-size d-flex">
                                <li className="size-item">
                                    <a href="">M</a>
                                </li>
                                <li className="size-item">
                                    <a href="">L</a>
                                </li>
                                <li className="size-item">
                                    <a href="">XL</a>
                                </li>
                                <li className="size-item">
                                    <a href="">2XL</a>
                                </li>
                                <li className="size-item">
                                    <a href="">3XL</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="product-info" style={{ display: 'block' }}>
                        <div className="product-types d-flex">
                            <img src={ProductType1} alt="Type 1" />
                            <img src={ProductType2} alt="Type 2" />
                            <img src={ProductType3} alt="Type 3" />
                            <img src={ProductType4} alt="Type 4" />
                        </div>
                        <a className="product-title" href="">Shorts thể thao promax - S1</a>
                        <p>
                            <span className="short-desc">Xanh Navy/Thoáng khí</span>
                        </p>
                        <p>
                            <span className="price-new">169.000đ</span>
                            <del className="price-old">189.000đ</del>
                            <span className="percent-discount">-11%</span>
                        </p>
                    </div>
                </li>
                // </div>


            ))}

        </div>
    );
};

export default ProductGrid;
