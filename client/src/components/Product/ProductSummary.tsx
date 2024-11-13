import React, { useEffect, useState } from "react";
import HeaderThumbProduct from "../../assets/images/header-thumb-product.png";
import Color from "../../assets/images/color.jpg";


const ProductSummary = () => {
    return (
        <div className={`wp-show-summary-product`}>
            <div className="show-summary-product container d-flex">
                <div className="show-summary-product container d-flex">
                    <div className="wp-ranking-price d-flex">
                        <div className="img-product">
                            <a href=""><img src={HeaderThumbProduct} alt="" /></a>
                        </div>
                        <div className="ranking-price d-flex">
                            <div className="ranking d-flex">
                                <div className="icons-star">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <span>
                                    | 1 | Đã bán (web): 144
                                </span>
                            </div>
                            <div className="price d-flex">
                                <span className="new-price">
                                    279.000đ
                                </span>
                                <del className="old-price">584.000đ</del>
                                <span className="percent-discount">
                                    -7%
                                </span>
                            </div>
                        </div>
                    </div>


                    <div className="desc d-flex">
                        <div className="group-color">
                            <div className="title">Màu sắc: <span>Đen</span></div>
                            <ul className="list-color d-flex">
                                <li>
                                    <a href="">
                                        <img src={Color} alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img src={Color} alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="group-size">
                            <div className="title">Kích thước: </div>
                            <ul className="list-size d-flex">
                                <li>
                                    <a href="">
                                        M
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        L
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        XL
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        2XL
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        3XL
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="num-size d-flex">
                        <input type="number" name="num-order" id="num-order" value="1" min="1" max="1000" />
                        <a href="" className="choose-size">Chọn kích thước</a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProductSummary;