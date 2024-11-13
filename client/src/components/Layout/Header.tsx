import React, { useState } from "react";
import Coolclub from "../../assets/images/coolmate.svg";
import rising84 from "../../assets/images/84rising.svg";
import coolxprint from "../../assets/images/coolxprint.svg";
import AllSale from "../../assets/images/all-sale.png";
import SaleAo from "../../assets/images/sale-ao.png";
import SaleQuan from "../../assets/images/sale-quan.png";
import PoloPromaxS2 from "../../assets/images/polo-promax-s2.png";
import TShirtAntManGraphic from "../../assets/images/t-shirt-ant-man-graphic.png";
import TShirtPeace from "../../assets/images/t-shirt-peace.png";
import AoKhoaHeiQ from "../../assets/images/ao-khoac-heiq-viroblock.png";
import Logo from "../../assets/images/logo.png";
import TanktopTheThao from "../../assets/images/tanktop-the-thao.png";
import PoloTheThaoV1 from "../../assets/images/polo-the-thao-v1.png";
import DailyShortExcool from "../../assets/images/daily-short-excool-v2.png";
import MatHangNgay from "../../assets/images/mac-hang-ngay.png";
import ChoiTheThao from "../../assets/images/choi-the-thao.png";
import QuanLotBoxerShorts from "../../assets/images/quan-lot-boxer-shorts.png";
import QuanLongTights from "../../assets/images/quan-long-tights.png";
import QuanLotLongLeg from "../../assets/images/quan-lot-long-leg.png";
import HuynhNhuCollection from "../../assets/images/huynh-nhu-collection.png";
import BSTDogCat from "../../assets/images/bst-dog-cat.png";
import CareShare from "../../assets/images/care-share.png";
import SoLuongIT from "../../assets/images/so-luong-it.png";
import GiaCaCanhTranh from "../../assets/images/gia-ca-canh-tranh.png";
import BaoHanh60Ngay from "../../assets/images/bao-hanh-60ngay.png";
import CacLoaiQuan from "../../assets/images/cac-loai-quan.png";
import SanPhamKhac from "../../assets/images/san-pham-khac.png";
import CacLoaiAo from "../../assets/images/cac-loai-ao.png";
import PhuKien from "../../assets/images/phu-kien.png";
import ViVoucher from "../../assets/images/vi-voucher.png";
import LichSuDonHang from "../../assets/images/lich-su-don-hang.png";
import SoDiaChi from "../../assets/images/so-dia-chi.png";
import CaiDatTaiKhoan from "../../assets/images/cai-dat-tai-khoan.png";
import DanhGiaPhanHoi from "../../assets/images/danh-gia-phan-hoi.png";
import FaqChinhSach from "../../assets/images/faq-chinh-sach.png";
import New from "../../assets/images/new.png";
import Bac from "../../assets/images/bac.png";
import RankingLevel1 from "../../assets/images/ranking-level-1.png";
import RankingLevel2 from "../../assets/images/ranking-level-2.png";
import RankingLevel3 from "../../assets/images/ranking-level-3.png";
import RankingLevel4 from "../../assets/images/ranking-level-4.png";
import QuanDaiTheThaoProActive from "../../assets/images/quan-dai-the-thao-pro-active.png";
import AoDaiTayCompactV2 from "../../assets/images/ao-dai-tay-cotton-compact-v2.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import AuthModal from "../Account/AuthModal";


const Header = () => {
    const [showModal, setShowModal] = useState(false);
    const handleOpen = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <div className="site-header">
            <div className="topbar d-flex jc-space-between container">
                <div className="topbar-left">
                    <ul className="menu-topbar d-flex m-0">
                        <li className="menu-topbar-item">
                            <a href="#" className="menu-topbar-link">
                                <img src={Coolclub} alt="" />
                            </a>
                        </li>
                        <li className="menu-topbar-item">
                            <a href="#" className="menu-topbar-link">
                                <img src={rising84} alt="" />
                            </a>
                        </li>
                        <li className="menu-topbar-item">
                            <a href="#" className="menu-topbar-link">
                                <img src={coolxprint} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="topbar-right">
                    <ul className="menu-topbar d-flex m-0">
                        <li className="menu-topbar-item">
                            <a href="#" className="menu-topbar-link">
                                Tham gia CoolClub
                                <i className="fa-solid fa-star"></i>
                            </a>
                        </li>
                        <li className="menu-topbar-item">
                            <a href="blog.html" className="menu-topbar-link">
                                Blog
                            </a>
                        </li>
                        <li className="menu-topbar-item">
                            <a href="about.html" className="menu-topbar-link">
                                Về Coolmate
                            </a>
                        </li>
                        <li className="menu-topbar-item">
                            <a href="#" onClick={handleOpen} className="menu-topbar-link">
                                Đăng nhập
                            </a>

                            <AuthModal show={showModal} handleClose={handleClose} />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="topbar-promotion">
                <a href="">
                    Đồ thu đông mới nhất đang được bán
                    <span>Mua ngay</span>
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>
            <div className="wp-header">
                <div className="container d-flex jc-space-between align-items-center">
                    <div className="logo-header">
                        <a href="index.html"><img src={Logo} alt="" /></a>
                    </div>
                    <menu>
                        <ul className="main-menu d-flex m-0">
                            <li className="menu-item">
                                <a href="#" className="menu-link">
                                    Sale
                                </a>
                                <div className="wp-sub-menu container">
                                    <div className="sub-menu">
                                        <p>Chương trình sale <span></span></p>
                                        <ul className="sale-program">
                                            <li>
                                                <a href="#">
                                                    <img src={AllSale} alt="" />
                                                    <span>Tất cả SALE</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src="https://mcdn.coolmate.me/image/October2023/mceclip3_89.png"
                                                        alt="" />
                                                    <span>SALE Lớn 50%</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src={SaleAo} alt="" />
                                                    <span>SALE Áo</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src={SaleQuan} alt="" />
                                                    <span>SALE Quần</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <ul className="sale-featured">
                                        <li>
                                            <a href="#">
                                                <img src={PoloPromaxS2} alt="" />
                                                <span>Polo Promax-S2</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src={TShirtAntManGraphic} alt="" />
                                                <span>T-Shirt Ant-Man Graphic</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src={TShirtPeace} alt="" />
                                                <span>T-Shirt Peace</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src={AoKhoaHeiQ} alt="" />
                                                <span>Áo khoác HeiQ ViroBlock</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="menu-item">
                                <a href="#" className="menu-link">
                                    Sản phẩm
                                </a>
                                <div className="wp-sub-menu container">
                                    <div className="sub-menu  d-flex">
                                        <ul className="follow-product">
                                            <p>Theo sản phẩm</p>
                                            <span></span>
                                            <li>
                                                <a href="#">
                                                    Tất cả
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Sản phẩm mới
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="mens-shirt">
                                            <p>Áo nam</p>
                                            <span></span>
                                            <li>
                                                <a href="#">
                                                    Tất cả Áo Nam
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Áo thun
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Áo sơ mi
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Áo polo
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Áo khoác
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Áo Tanktop
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Áo thể thao
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="mens-pants">
                                            <p>Quần nam</p>
                                            <span></span>
                                            <li>
                                                <a href="#">
                                                    Tất cả quần nam
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Quần shorts
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Quần jeans
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Quần dài
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Quần thể thao
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="mens-accessories">
                                            <p>Phụ kiện nam</p>
                                            <span></span>
                                            <li>
                                                <a href="#">
                                                    Tất cả phụ kiện
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Tất/Vớ
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Mũ nón
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="featured-product">
                                            <li>
                                                <a href="#">
                                                    <img src={TanktopTheThao} alt="" />
                                                    <span>Tanktop thể thao</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src={PoloTheThaoV1} alt="" />
                                                    <span>Polo thể thao V1</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src={DailyShortExcool} alt="" />
                                                    <span>Daily Short Excool V2</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="menu-item">
                                <a href="#" className="menu-link">
                                    Đồ lót
                                </a>
                                <div className="sub-menu">
                                    <ul className="follow-product">
                                        <p>Theo sản phẩm</p>
                                        <li>
                                            <a href="#">
                                                Tất cả
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Brief (Tam giác)
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Trunk (Boxer)
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Boxer Brief (Boxer dài)
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Long Leg
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Boxer shorts
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Long Tight
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="follow-demand">
                                        <p>Theo nhu cầu</p>
                                        <li>
                                            <a href="#">
                                                <img src={MatHangNgay} alt="" />
                                                <span>Mặc hàng ngày</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src={ChoiTheThao} alt="" />
                                                <span>Chơi thể thao</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="featured-product">
                                        <li>
                                            <a href="#">
                                                <img src={QuanLotBoxerShorts} alt="" />
                                                <span>Quần lót Boxer Shorts</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src={QuanLongTights} alt="" />
                                                <span>Quần Long Tights</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src={QuanLotLongLeg} alt="" />
                                                <span>Quần lót Long Leg</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="menu-item">
                                <a href="#" className="menu-link">
                                    Đồ thể thao
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="#" className="menu-link">
                                    Mặc hàng ngày
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="#" className="menu-link">
                                    Nước hoa
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="#" className="menu-link">
                                    Sản xuất riêng
                                </a>
                                <div className="wp-sub-menu container">
                                    <div className="sub-menu d-flex">
                                        <div className="coolx-print">
                                            <h3>CoolxPrint</h3>
                                            <p>Đặt sản xuất chưa bao giờ đơn giản đến thế</p>
                                            <ul className="coolx-print d-flex">
                                                <li>
                                                    <a href="#">
                                                        <img src={SoLuongIT} alt="" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src={GiaCaCanhTranh} alt="" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src={BaoHanh60Ngay} alt="" />
                                                    </a>
                                                </li>
                                            </ul>
                                            <a href="">Khám phá ngay</a>
                                        </div>
                                        <ul className="featured-product d-flex">
                                            <li>
                                                <a href="#">
                                                    <img src={CacLoaiQuan} alt="" />
                                                    <span>Các loại quần</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src={SanPhamKhac} alt="" />
                                                    <span>Sản phẩm khác</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src={CacLoaiAo} alt="" />
                                                    <span>Các loại áo</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src={PhuKien} alt="" />
                                                    <span>Phụ kiện</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </li>
                            <li className="menu-item">
                                <a href="#" className="menu-link">
                                    Care&Share
                                </a>
                                <div className="wp-sub-menu container">
                                    <div className="sub-menu d-flex">
                                        <div className="follow-product">
                                            <p>Theo sản phẩm</p>
                                            <span></span>
                                            <ul className="follow-product">

                                                <li>
                                                    <a href="#">
                                                        Tất cả
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Áo thun in
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Phụ kiện
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="collection">
                                            <p>Bộ sưu tập</p>
                                            <span></span>
                                            <ul className="collection">
                                                <li>
                                                    <a href="#" className="d-flex">
                                                        <img src={HuynhNhuCollection} alt="" />
                                                        <span>Huỳnh Như Collection</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="d-flex">
                                                        <img src={BSTDogCat} alt="" />
                                                        <span>BST Cat & Dog</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="care-share">
                                            <p>Coolmate cam kết dành 10% doanh thu từ sản phẩm “Care & Share” đóng
                                                góp vào quỹ để tổ chức các hoạt động thiện nguyện dành cho trẻ em có
                                                hoàn cảnh khó khăn.</p>
                                            <img src={CareShare} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </menu>
                    <div className="tools d-flex">
                        <div className="form-search">

                            <form action="" method="post">
                                <button><i className="fa-solid fa-magnifying-glass"></i></button>
                                <input type="text" name="search" id="search" placeholder="Tìm kiếm sản phẩm... "
                                    // onFocus={expandSearch()}
                                    autoComplete={'off'} />
                            </form>
                            {/* <div className="form-expand-search d-flex">
                                <form action="" method="post">
                                    <input type="text" name="search" id="search" placeholder="Tìm kiếm sản phẩm..."
                                        autoComplete="off" />
                                    <button>
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </form>
                                <span id="close-form-search">
                                    <i className="fa-solid fa-xmark"></i>
                                </span>
                            </div>
                            <div className="display-recent-results">
                                <div className="wp-featured-keywords">
                                    <p>Từ khóa nổi bật ngày hôm nay</p>
                                    <div className="featured-keywords d-flex">
                                        <a href="">Tập gym</a>
                                        <a href="">Áo Basic</a>
                                        <a href="">Excool</a>
                                        <a href="">Jeans</a>
                                        <a href="">Chạy bộ</a>
                                        <a href="">Gym</a>
                                        <a href="">Polo</a>
                                    </div>
                                </div>
                                <div className="recently-viewed">
                                    <p>Sản phẩm đã xem gần đây</p>
                                    <ul className="d-flex">
                                        <li>
                                            <a href=""><img src="public/images/mystery-box.png" alt="" /></a>
                                            <a href="">Mystery Box (trị giá 500K)</a>
                                        </li>
                                        <li>
                                            <a href=""><img src="public/images/quan-joggers-excool.png" alt="" /></a>
                                            <a href="">Quần Joggers Excool</a>
                                        </li>
                                        <li>
                                            <a href=""><img src="public/images/combo-5-trunk-cotton-compact.png"
                                                alt="" /></a>
                                            <a href="">Combo 5 Trunk Cotton Compact</a>
                                        </li>
                                        <li>
                                            <a href=""><img src="public/images/gaiter-mat-na-da-nang-chay-bo.png"
                                                alt="" /></a>
                                            <a href="">Gaiter mặt nạ đa năng chạy bộ</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="display-latest-results">
                                <h5>Sản phẩm</h5>
                                <ul className="d-flex">
                                    <li>
                                        <a href="">
                                            <img className="product-thumb"
                                                src="public/images/ao-hoodie-84rising-freedom.png" alt="" />
                                        </a>
                                        <a className="title" href="">
                                            Áo Hoodie 84RISING Freedom
                                        </a>
                                        <p>
                                            <span className="new-price">439.000đ</span>
                                            <del className="old-price">584.000đ</del>
                                            <span className="percent-discount">-25%</span>
                                        </p>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img className="product-thumb" src="public/images/ao-thun-body-84rising.png"
                                                alt="" />
                                        </a>
                                        <a className="title" href="">
                                            Áo thun Boxy 84RISING
                                        </a>
                                        <p>
                                            <span className="new-price">259.000đ</span>
                                            <del className="old-price">299.000đ</del>
                                            <span className="percent-discount">-13%</span>
                                        </p>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img className="product-thumb"
                                                src="public/images/ao-thun-body-84rising-xam.png" alt="" />
                                        </a>
                                        <a className="title" href="">
                                            Áo thun Boxy 84RISING
                                        </a>
                                        <p>
                                            <span className="new-price">259.000đ</span>
                                            <del className="old-price">299.000đ</del>
                                            <span className="percent-discount">-13%</span>
                                        </p>
                                    </li>
                                </ul>
                                <a href="">Xem tất cả</a>
                            </div> */}

                        </div>
                        <div className="info-account">
                            <i className="fa-regular fa-user"></i>
                            <div className="show-info-account">
                                <div className="wp-hello-account d-flex">
                                    <div className="hello-account">
                                        <span id="close-sum-account">
                                            <i className="fa-solid fa-xmark"></i>
                                        </span>
                                        <h2>Hi, Hà Văn Dũng</h2>
                                        <img src={New} alt="" />
                                    </div>

                                </div>
                                <div className="body">
                                    <div className="account-line">
                                        <div className="spending">
                                            <p>Chi tiêu thêm</p>
                                            <p className="price">500.000đ</p>
                                            <p>để lên hạng <img src={Bac} alt="" /> </p>
                                        </div>
                                        <div className="line-ranking">
                                            <div className="line"></div>
                                            <div className="milestones d-flex">
                                                <span className="milestone-1">
                                                </span>
                                                <span className="milestone-2">
                                                </span>
                                                <span className="milestone-3">
                                                </span>
                                                <span className="milestone-4">
                                                </span>
                                            </div>
                                            <div className="ranking-icons">
                                                <ul className="d-flex">
                                                    <li>
                                                        <img src={RankingLevel1} alt="" />
                                                    </li>
                                                    <li>
                                                        <img src={RankingLevel2} alt="" />
                                                    </li>
                                                    <li>
                                                        <img src={RankingLevel3} alt="" />
                                                    </li>
                                                    <li>
                                                        <img src={RankingLevel4} alt="" />
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>Hạng thành viên sẽ được cập nhật lại sau 31/12/2023</p>
                                        </div>
                                    </div>
                                    <div className="coolcash-coolclub d-flex">
                                        <div className="coolcash">
                                            <p>Bạn đang có</p>
                                            <p>
                                                <i className="fa-solid fa-hand-holding-dollar"></i>
                                                <span>0 Coolcash</span>
                                            </p>
                                            <p>Chờ: 0 Coolcash</p>
                                        </div>
                                        <div className="coolclub">
                                            <a href="">
                                                CoolClub Rewards Hub
                                            </a>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </div>
                                    </div>
                                    <div className="special-orders">
                                        <h3>Ưu đãi dành riêng cho bạn</h3>
                                        <ul>
                                            <li>
                                                <div>
                                                    <p className="title-voucher">COOLCLUB10</p>
                                                    <p className="desc-voucher">
                                                        Giảm 10% cho đơn hàng 0đ (Dành cho khách hàng CoolClub)
                                                    </p>
                                                    <p className="expiry">HSD: 30.11.2023</p>
                                                    <a href="" className="use-immediately-voucher">Sử dụng ngay</a>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <p className="title-voucher">WELCOMEFRKIW1</p>
                                                    <p className="desc-voucher">
                                                        Giảm 15% tối đa 50K (Không áp dụng cho danh mục SALE)
                                                    </p>
                                                    <p className="expiry">HSD: 02.11.2023</p>
                                                    <a href="" className="use-immediately-voucher">Sử dụng ngay</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="others-tools">
                                        <ul className="d-flex">
                                            <li>
                                                <a href="">
                                                    <img src={ViVoucher} alt="" />
                                                    <span>Ví Voucher</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <img src={LichSuDonHang} alt="" />
                                                    <span>Lịch sử đơn hàng</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <img src={SoDiaChi} alt="" />
                                                    <span>Sổ địa chỉ</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <img src={CaiDatTaiKhoan} alt="" />
                                                    <span>Cài đặt tài khoản</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <img src={DanhGiaPhanHoi} alt="" />
                                                    <span>Đánh giá và phản hồi</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <img src={FaqChinhSach} alt="" />
                                                    <span>FAQ & Chính sách</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="redirect-account">
                                    <a href="">ĐI ĐẾN TÀI KHOẢN</a>
                                </div>
                            </div>
                        </div>
                        <div className="cart">
                            <a href="cart.html"><i className="fa-solid fa-cart-shopping"><span>2</span></i></a>
                            <div className="show-cart-buy">
                                <div className="num-cart">
                                    <p><span>2 sản phẩm</span> <a href="cart.html">Xem tất cả</a></p>
                                </div>
                                <div className="list-buy">
                                    <ul className="d-flex">
                                        <li className="d-flex">
                                            <a href="">
                                                <img src={QuanDaiTheThaoProActive} alt=""
                                                    className="product-thumb" />
                                            </a>
                                            <div className="product-detail">
                                                <a className="product-name" href="">Quần dài thể thao Pro Active</a>
                                                <div className="style">Xám phối đen / M</div>
                                                <p><span className="new-price">379.000đ</span> <del
                                                    className="old-price">399.000đ</del></p>
                                                <p className="num">x2</p>
                                            </div>
                                            <div className="button-delete">
                                                <i className="fa-solid fa-xmark"></i>
                                            </div>
                                        </li>
                                        <li className="d-flex">
                                            <a href="">
                                                <img src={AoDaiTayCompactV2} alt=""
                                                    className="product-thumb" />
                                            </a>
                                            <div className="product-detail">
                                                <a className="product-name" href="">Áo dài tay Cotton Compact V2</a>
                                                <div className="style">Xanh Navy / M</div>
                                                <p><span className="new-price">269.000đ</span> <del
                                                    className="old-price"></del></p>
                                                <p className="num">x1</p>
                                            </div>
                                            <div className="button-delete">
                                                <i className="fa-solid fa-xmark"></i>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;