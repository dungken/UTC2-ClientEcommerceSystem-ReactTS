import React from "react";
import ThumbnailProductDemo1 from "../../assets/images/ao-hoodie-84rising-freedom.png";
import ProductType1 from "../../assets/images/product-type-1.jpg";
import ProductType2 from "../../assets/images/product-type-2.jpg";
import ProductType3 from "../../assets/images/product-type-3.jpg";
import ProductType4 from "../../assets/images/product-type-4.jpg";
import DemoProduc1 from "../../assets/images/demo-product-1.jpg";
import DemoProduct2 from "../../assets/images/demo-product-2.jpg";
import AoKhoacHeiq from "../../assets/images/ao-khoac-heiq-viroblock.png";
import TShirtAntMan from "../../assets/images/t-shirt-ant-man-graphic.png";
import DemoProduct1 from "../../assets/images/demo-product-1.jpg";
import TShirtPeace from "../../assets/images/t-shirt-peace.png";
import TShirtCotton from "../../assets/images/t-shirt-cotton.png";
import QuanLongTights from "../../assets/images/quan-long-tights.png";
import QuanJoggersXCool from "../../assets/images/quan-joggers-excool.png";
import AoKhoatHeiq from "../../assets/images/ao-khoac-heiq-viroblock.png";
import AoKhoatHoodie84rising from "../../assets/images/ao-khoac-heiq-viroblock.png";
import ShortChayBoCoolmateBasic from "../../assets/images/shorts-chay-bo-coolmate-basics.png";
import TShirtChayBoBasic from "../../assets/images/t-shirt-chay-bo-basic.png";
import BannerQuanLotNam from "../../assets/images/banner-quan-lot-nam.png";
import BtsThuDong from "../../assets/images/bst-thu-dong.png";
import RunningCollection from "../../assets/images/running-collection.png";
import AllProduct from "../../assets/images/all-product.png";
import DoTheThao from "../../assets/images/do-the-thao.png";
import MacHangNgay2 from "../../assets/images/mac-hang-ngay-2.png";
import QuanLotNam from "../../assets/images/quan-lot-boxer-shorts.png";
import Slider2 from "../../assets/images/slider-2.png";
import Irl1 from "../../assets/images/irl-1.png";
import Irl2 from "../../assets/images/irl-2.png";
import Irl3 from "../../assets/images/irl-3.png";
import Irl4 from "../../assets/images/irl-4.png";
import Irl5 from "../../assets/images/irl-5.png";
import CareShareBanner from "../../assets/images/care-share-banner.png";
import MoodBooster from "../../assets/images/mood-booster-2023.png";
import CareShare1 from "../../assets/images/care-share-1.png";
import BasketballCollection from "../../assets/images/basketball-collection.png";

const SiteHomePage = () => {
    return (
        <main className="site-homepage">
            <section className="wp-homepage-products">
                <div className="homepage-products container">
                    <h3>
                        <span id="new-product">Sản phẩm mới</span> <span>|</span> <span id="product-best-seller">Bán chạy nhất</span>
                    </h3>
                    <ul className="product-container d-flex p-0" id="wrapper-product">
                        <li className="product-card">
                            <div className="product-image">
                                <a href="product-details.html">
                                    <img src={AoKhoacHeiq} alt="Product 2" className="product-thumb" data-src="public/images/t-shirt-chay-bo-basic.png" />
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
                            <div className="product-info">
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
                        <li className="product-card">
                            <div className="product-image">
                                <a href="product-details.html">
                                    <img src={TShirtAntMan} alt="Product 3" className="product-thumb" data-src="public/images/demo-product-2.jpg" />
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
                            <div className="product-info">
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
                        <li className="product-card">
                            <div className="product-image">
                                <a href="product-details.html">
                                    <img src={DemoProduc1} alt="Product 4" className="product-thumb" data-src="public/images/demo-product-2.jpg" />
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
                            <div className="product-info">
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
                        <li className="product-card">
                            <div className="product-image">
                                <a href="product-details">
                                    <img src={DemoProduct2} alt="Product 5" className="product-thumb" data-src="public/images/demo-product-2.jpg" />
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
                            <div className="product-info">
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
                    </ul>
                </div>
            </section>
            <section className="banner-block">
                <a href="">
                    <img src={BannerQuanLotNam} alt="Banner 1" />
                </a>
                <div className="desc-banner">
                    <h1 className="title-banner">
                        Quần lót nam
                    </h1>
                    <p>3 triệu chiếc quần đã đến tủ đồ các chàng</p>
                    <p className="endow">Mua combo 3 nhận ngay quà tặng</p>
                    <a href="">Khám phá ngay</a>
                </div>
            </section>
            <section className="wp-homepage-products">
                <div className="homepage-products container">
                    <div className="title d-flex">
                        <h3>QUẦN LÓT NAM</h3>
                        <a href="">Xem thêm</a>
                    </div>
                    <ul className="product-container category d-flex p-0">
                        <li className="product-card">
                            <div className="product-image">
                                <a href="product-details.html">
                                    <img src={DemoProduct1} alt="Product 6" className="product-thumb" data-src="public/images/ao-hoodie-84rising-freedom.png" />
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
                            <div className="product-info">
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
                        <li className="product-card">
                            <div className="product-image">
                                <a href="product-details.html">
                                    <img src={TShirtPeace} alt="Product 7" className="product-thumb" data-src="public/images/demo-product-2.jpg" />
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
                            <div className="product-info">
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
                        <li className="product-card">
                            <div className="product-image">
                                <a href="product-details.html">
                                    <img src={TShirtCotton} alt="Product 8" className="product-thumb" data-src="public/images/demo-product-2.jpg" />
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
                            <div className="product-info">
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
                        <li className="product-card">
                            <div className="product-image">
                                <a href="product-details.html">
                                    <img src={ThumbnailProductDemo1} alt="Product 9" className="product-thumb" data-src="public/images/demo-product-2.jpg" />
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
                            <div className="product-info">
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
                    </ul>
                </div>
            </section>
            <section className="banner-block">
                <a href="">
                    <img src={BtsThuDong} alt="Banner 2" />
                </a>
                <div className="desc-banner">
                    <h1 className="title-banner">
                        BST THU ĐÔNG
                    </h1>
                    <p>Tặng 01 vớ cổ dài khi mua sản phẩm thu đông</p>
                    <a href="">Khám phá ngay</a>
                </div>
            </section>
            <section className="wp-homepage-products">
                <div className="homepage-products container">
                    <div className="title d-flex">
                        <h3>SẢN PHẨM THU ĐÔNG</h3>
                        <a href="">Xem thêm</a>
                    </div>
                    <ul className="product-container category d-flex p-0">
                        <li className="product-card">
                            <div className="product-image">
                                <a href="product-details.html">
                                    <img src={QuanLongTights} alt="Product 10" className="product-thumb" data-src="public/images/demo-product-2.jpg" />
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
                            <div className="product-info">
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
                        <li className="product-card">
                            <div className="product-image">
                                <a href="product-details.html">
                                    <img src={QuanJoggersXCool} alt="Product 11" className="product-thumb" data-src="public/images/demo-product-2.jpg" />
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
                            <div className="product-info">
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
                        <li className="product-card">
                            <div className="product-image">
                                <a href="product-details.html">
                                    <img src={AoKhoatHeiq} alt="Product 12" className="product-thumb" data-src="public/images/demo-product-2.jpg" />
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
                            <div className="product-info">
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
                        <li className="product-card">
                            <div className="product-image">
                                <a href="product-details.html">
                                    <img src={AoKhoatHoodie84rising} alt="Product 13" className="product-thumb" data-src="public/images/demo-product-2.jpg" />
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
                            <div className="product-info">
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
                    </ul>
                </div>
            </section>
            <section className="banner-block">
                <a href="">
                    <img src={RunningCollection} alt="Banner 3" />
                </a>
                <div className="desc-banner">
                    <h1 className="title-banner">
                        RUNNING <br /> COLLECTION
                    </h1>
                    <p>Mang đến sự thoáng mát trên suốt đường chạy </p>
                    <p className="endow">Tặng áo essential cho đơn 499k</p>
                    <a href="">Khám phá ngay</a>
                </div>
            </section>
            <section className="wp-homepage-products">
                <div className="homepage-products container">
                    <div className="title d-flex">
                        <h3>SẢN PHẨM CHẠY BỘ</h3>
                        <a href="">Xem thêm</a>
                    </div>
                    <ul className="product-container category d-flex p-0">
                        <li className="product-card">
                            <div className="product-image">
                                <a href="product-details.html">
                                    <img src={ShortChayBoCoolmateBasic} alt="Product 14" className="product-thumb" data-src="public/images/demo-product-2.jpg" />
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
                            <div className="product-info">
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
                        <li className="product-card">
                            <div className="product-image">
                                <a href="product-details.html">
                                    <img src={TShirtChayBoBasic} alt="Product 15" className="product-thumb" data-src="public/images/demo-product-2.jpg" />
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
                            <div className="product-info">
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
                        <li className="product-card">
                            <div className="product-image">
                                <a href="product-details.html">
                                    <img src={TShirtPeace} alt="Product 16" className="product-thumb" data-src="public/images/demo-product-2.jpg" />
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
                            <div className="product-info">
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
                        <li className="product-card">
                            <div className="product-image">
                                <a href="product-details.html">
                                    <img src={ShortChayBoCoolmateBasic} alt="Product 17" className="product-thumb" data-src="public/images/demo-product-2.jpg" />
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
                            <div className="product-info">
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
                    </ul>
                </div>
            </section>
            <section className="homepage-care-and-share container">
                <div className="care-share-images">
                    <a href="">
                        <img src={CareShareBanner} alt="Care & Share" />
                    </a>
                </div>
                <div className="care-share-content">
                    <img src={CareShare1} alt="Care & Share 1" />
                    <p>Góp phần mang lại cuộc <br /> sống tươi đẹp <br />hơn cho tụi nhỏ</p>
                    <a href="">Về care & share</a>
                </div>
            </section>
            <section className="homepage-brands container p-0">
                <ul className="d-flex p-0 justify-content-around">
                    <li>
                        <img src={MoodBooster} alt="Mood Booster 2023" />
                        <div className="title-collection">
                            <h4>NƯỚC HOA CM24</h4>
                            <h1>MOOD BOOSTER <br /> 2023</h1>
                            <a href="">Khám phá ngay</a>
                        </div>
                    </li>
                    <li>
                        <img src={BasketballCollection} alt="Basketball Collection" />
                        <div className="title-collection">
                            <h4>84RISING - STREETWEAR</h4>
                            <h1>BASKETBALL <br /> COLLECTION</h1>
                            <a href="">Khám phá ngay</a>
                        </div>
                    </li>
                </ul>
            </section>
            <section className="homepage-collections container p-0">
                <ul className="d-flex p-0 gap-2">
                    <li>
                        <a href="">
                            <img src={AllProduct} alt="All Products" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={DoTheThao} alt="Sportswear" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={MacHangNgay2} alt="Everyday Wear" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={AllProduct} alt="Men's Underwear" />
                        </a>
                    </li>
                </ul>
            </section>
            <section className="banner-block">
                <div className="container">
                    <a href="#">
                        <img src={Slider2} alt="Sale Banner" />
                    </a>
                    <div className="desc-banner sale">
                        <h1 className="title-banner">SALE 50%</h1>
                        {/* <p><i>Giới hạn thời gian</i></p> */}
                        {/* <a href="">Khám phá ngay</a> */}
                    </div>
                </div>
            </section>
            <section className="wp-homepage-irl">
                <div className="homepage-irl container">
                    <div className="irl-title">
                        <h1>Nhật ký Coolmate</h1>
                        <p>Chia sẻ diện mạo mới nhất của bạn cùng với #Coolmate.</p>
                    </div>
                    <ul className="product-container d-flex p-0">
                        <li className="product-card-irl">
                            <a href="">
                                <img src={Irl1} alt="IRL 1" />
                            </a>
                            <i className="fa-solid fa-bag-shopping"></i>
                        </li>
                        <li className="product-card-irl">
                            <a href="">
                                <img src={Irl2} alt="IRL 2" />
                            </a>
                            <i className="fa-solid fa-bag-shopping"></i>
                        </li>
                        <li className="product-card-irl">
                            <a href="">
                                <img src={Irl3} alt="IRL 3" />
                            </a>
                            <i className="fa-solid fa-bag-shopping"></i>
                        </li>
                        <li className="product-card-irl">
                            <a href="">
                                <img src={Irl4} alt="IRL 4" />
                            </a>
                            <i className="fa-solid fa-bag-shopping"></i>
                        </li>
                        <li className="product-card-irl">
                            <a href="">
                                <img src={Irl5} alt="IRL 5" />
                            </a>
                            <i className="fa-solid fa-bag-shopping"></i>
                        </li>
                    </ul>
                </div>
                {/* <div className="btn-next-prev-irl d-flex">
                    <button className="pre-btn-irl">
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button className="nxt-btn-irl">
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div> */}
            </section>
        </main>
    );
};

export default SiteHomePage;