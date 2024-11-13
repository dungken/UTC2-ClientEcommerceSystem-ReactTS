import React, { useEffect, useState } from "react";

import Color from "../../assets/images/color.jpg";
import ProductThumb1 from "../../assets/images/product-thumb-1.png";
import ProductThumb2 from "../../assets/images/product-thumb-2.png";
import ProductThumb3 from "../../assets/images/product-thumb-3.png";
import ProductThumb4 from "../../assets/images/product-thumb-4.png";
import ProductThumb5 from "../../assets/images/product-thumb-5.png";
import ProductThumb6 from "../../assets/images/product-thumb-6.png";
import ProductThumb7 from "../../assets/images/product-thumb-7.png";
import DoiTraCucDe from "../../assets/images/doi-tra-cuc-de.png";
import MienPhiVanChuyen from "../../assets/images/mien-phi-van-chuyen.png";
import DoiTra60Ngay from "../../assets/images/60-ngay-doi-tra.png";
import Hotline from "../../assets/images/hotline.png";
import GiaoHangTanNoi from "../../assets/images/giao-hang-tan-noi.png";
import GiaoHangNhanh from "../../assets/images/giao-hang-nhanh.png";
import DetailProduct1 from "../../assets/images/detail-product-1.png";
import TatTheThaoChongTruot from "../../assets/images/tat-the-thao-chong-truot.png";
import TShirtChayBoBasic from "../../assets/images/t-shirt-chay-bo-basic.png";
import MuLuoiTrai from "../../assets/images/mu-luoi-trai.png";
import Combo2Trunk from "../../assets/images/combo-2-trunk-excool-cut.jpg";
import ProductImageSlider from "./ProductImageSlider";
import ProductSummary from "./ProductSummary";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import ProductDetailDescription from "./ProductDetailDescription";
import SizeGuideModal from "./SizeGuideModal";


const Product = () => {
    const productImages = [
        ProductThumb1,
        ProductThumb2,
        ProductThumb3,
        ProductThumb4,
        ProductThumb5,
        ProductThumb6,
        ProductThumb7,
    ];

    const [showSummary, setShowSummary] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const halfway = window.innerHeight / 2;
            if (window.scrollY >= halfway) {
                setShowSummary(true);
            } else {
                setShowSummary(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    console.log(showSummary);


    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);


    return (
        <div>
            {!showSummary && <Header />}
            <main className="site-homepage">
                {showSummary && <ProductSummary />}
                <div className="wp-detail-product container">
                    <section className="wp-display-product">
                        <div className="tab-link">
                            <ul className="list-tab-link d-flex mb-0">
                                <li className="link-item">
                                    <a href="">Trang chủ</a>
                                </li>
                                <li className="link-item">
                                    <span>/</span>
                                    <a href="">Sản phẩm</a>
                                </li>
                            </ul>
                        </div>

                        <div className="display-product d-flex row justify-content-center">
                            <div className="col-md-5">
                                <div className="img-relate-product">
                                    <div className="thumbnail-product">
                                        <ProductImageSlider images={productImages} />
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-4">
                                <div className="wp-desc-product">
                                    <div className="desc">
                                        <h1 className="title">Quần Joggers Daily Wear</h1>
                                        <p className="sub-title">HeiQ ViroBlock</p>
                                        <div className="ranking d-flex">
                                            <div className="list-star">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <span>(1) | Đã bán (web): 144</span>
                                        </div>

                                        <div className="price d-flex">
                                            <span className="new-price">
                                                279.000đ
                                            </span>
                                            <del className="old-price">
                                                299.000đ
                                            </del>
                                            <span className="percent-discount">
                                                -7%
                                            </span>
                                        </div>

                                        <div className="discount-code">
                                            <p>Các mã giảm giá có thể áp dụng:</p>
                                            <ul className="list-code d-flex">
                                                <li>
                                                    <a href="">Giảm 30%</a>
                                                </li>
                                                <li>
                                                    <a href="">Giảm 50K</a>
                                                </li>
                                                <li>
                                                    <a href="">Giảm 10%</a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="group-color">
                                            <div className="title">Màu sắc: <span>Đen</span></div>
                                            <ul className="list-color d-flex m-2">
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
                                            <div className="d-flex">
                                                <div className="title">Kích thước: </div>
                                                <a href="#" onClick={(e) => { e.preventDefault(); handleShowModal(); }}>
                                                    Hướng dẫn chọn size
                                                </a>
                                            </div>

                                            {/* Render the modal only when showModal is true */}
                                            {showModal && <SizeGuideModal show={showModal} handleClose={handleCloseModal} />}


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

                                        <div className="num-size d-flex">
                                            <input type="number" name="num-order" id="num-order" value="1" min="1"
                                                max="1000" />
                                            <a href="" className="choose-size">Chọn kích thước</a>
                                        </div>

                                    </div>


                                </div>

                            </div>
                            <div className="support">
                                <ul className="list-support d-flex">
                                    <li>
                                        <img src={DoiTraCucDe} alt="" />
                                        <p>Đổi trả cực dễ <br /> chỉ cần số điện thoại</p>
                                    </li>
                                    <li>
                                        <img src={MienPhiVanChuyen} alt="" />
                                        <p>Miễn phí vận chuyển<br />
                                            cho đơn hàng trên 200k</p>
                                    </li>
                                    <li>
                                        <img src={DoiTra60Ngay} alt="" />
                                        <p>60 ngày đổi trả<br />
                                            vì bất kỳ lý do gì</p>
                                    </li>
                                    <li>
                                        <img src={Hotline} alt="" />
                                        <p>Hotline 1900.27.27.37<br />
                                            hỗ trợ từ 8h30 - 22h <br />
                                            mỗi ngày</p>
                                    </li>
                                    <li>
                                        <img src={GiaoHangTanNoi} alt="" />
                                        <p>Đến tận nơi nhận hàng trả, <br />hoàn tiền trong 24h</p>
                                    </li>
                                    <li>
                                        <img src={GiaoHangNhanh} alt="" />
                                        <p>Giao hàng nhanh<br /> toàn quốc</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <ProductDetailDescription />

                    <section className="favorite-product">
                        <p>SẢN PHẨM BẠN CÓ THỂ THÍCH</p>
                        <ul className="list-favorite-product d-flex">
                            <li className="favorite-item">
                                <div className="img-product">
                                    <a href=""><img src={TatTheThaoChongTruot}
                                        alt="" /></a>
                                </div>
                                <div className="desc-img-product">
                                    <div className="title">
                                        <a href="">Tất thể thao chống trượt</a>
                                    </div>
                                    <div className="price">
                                        <span className="new-price">
                                            279.000đ
                                        </span>
                                        <del className="old-price">
                                            299.000đ
                                        </del>
                                        <span className="percent-discount">
                                            -7%
                                        </span>
                                    </div>
                                </div>
                            </li>

                            <li className="favorite-item">
                                <div className="img-product">
                                    <a href=""><img src={TShirtChayBoBasic} alt="" /></a>
                                </div>
                                <div className="desc-img-product">
                                    <div className="title">
                                        <a href="">Tất thể thao chống trượt</a>
                                    </div>
                                    <div className="price">
                                        <span className="new-price">
                                            279.000đ
                                        </span>
                                        <del className="old-price">
                                            299.000đ
                                        </del>
                                        <span className="percent-discount">
                                            -7%
                                        </span>
                                    </div>
                                </div>
                            </li>

                            <li className="favorite-item">
                                <div className="img-product">
                                    <a href=""><img src={MuLuoiTrai} alt="" /></a>
                                </div>
                                <div className="desc-img-product">
                                    <div className="title">
                                        <a href="">Tất thể thao chống trượt</a>
                                    </div>
                                    <div className="price">
                                        <span className="new-price">
                                            279.000đ
                                        </span>
                                        <del className="old-price">
                                            299.000đ
                                        </del>
                                        <span className="percent-discount">
                                            -7%
                                        </span>
                                    </div>
                                </div>
                            </li>

                            <li className="favorite-item">
                                <div className="img-product">
                                    <a href=""><img src={Combo2Trunk}
                                        alt="" /></a>
                                </div>
                                <div className="desc-img-product">
                                    <div className="title">
                                        <a href="">Tất thể thao chống trượt</a>
                                    </div>
                                    <div className="price">
                                        <span className="new-price">
                                            279.000đ
                                        </span>
                                        <del className="old-price">
                                            299.000đ
                                        </del>
                                        <span className="percent-discount">
                                            -7%
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </section>


                    <section className="reviews-comments d-flex">

                        <div className="reviews">
                            <p>ĐÁNH GIÁ SẢN PHẨM</p>
                            <span className="num-star">
                                5
                            </span>
                            <div className="icons-star">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                            <div className="num-review">
                                2 đánh giá
                            </div>
                        </div>

                        <div className="comment">
                            <div className="filter-comment d-flex">
                                <select name="star" id="star">
                                    <option value="0">Đánh giá</option>
                                    <option value="1">1 sao</option>
                                    <option value="2">2 sao</option>
                                    <option value="3">3 sao</option>
                                    <option value="4">4 sao</option>
                                    <option value="5">5 sao</option>
                                </select>
                                <select name="picture" id="picture">
                                    <option value="0">Ảnh</option>
                                    <option value="1">Có ảnh</option>
                                    <option value="2">Không ảnh</option>
                                </select>
                                <select name="response" id="response">
                                    <option value="0">Phản hồi</option>
                                    <option value="1">Đã phản hồi</option>
                                    <option value="2">Chưa phản hồi</option>
                                </select>
                            </div>

                            <div className="desc-comments">
                                <ul className="list-comments d-flex">
                                    <li>
                                        <div className="icons-star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <div className="author">
                                            w_widbljit
                                        </div>
                                        <div className="style-product">
                                            <i>Đen / 2XL</i>
                                        </div>
                                        <div className="original">
                                            từ Shopee
                                        </div>
                                        <div className="content-comment">
                                            Quần rất đẹp. Đóng gói chỉn chu
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icons-star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <div className="author">
                                            w_widbljit
                                        </div>
                                        <div className="style-product">
                                            <i>Đen / 2XL</i>
                                        </div>
                                        <div className="original">
                                            từ Shopee
                                        </div>
                                        <div className="content-comment">
                                            Quần rất đẹp. Đóng gói chỉn chu
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="pagination">
                                1/1
                            </div>

                        </div>
                    </section>

                </div>
            </main>
            <Footer />
        </div>

    )
};

export default Product;