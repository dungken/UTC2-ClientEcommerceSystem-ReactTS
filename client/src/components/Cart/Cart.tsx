import React from "react";
import Momo from "../../assets/images/momo.png";
import ZaloPay from "../../assets/images/zalopay.png";
import ShoppePay from "../../assets/images/shopee-pay.png";
import VnPay from "../../assets/images/vn-pay.png";
import COD from "../../assets/images/cod.png";
import QrCode from "../../assets/images/qr-code.png";
import AoTayDaiCompact from "../../assets/images/ao-dai-tay-cotton-compact-v2.png";
import Header from "../Layout/Header";

const Cart = () => {
    return (
        <div>
            <Header />
            <div className="wp-cart container d-flex" style={{ padding: '170px 0px 20px 0px' }}>

                <div className="info-client">

                    <div className="name-client">
                        <h2>
                            Hi, Hà Văn Dũng
                        </h2>
                        <p>Tổng đơn (1 sản phẩm) <span>239.000đ</span></p>
                    </div>

                    <div className="wp-info-transport">

                        <div className="head-info-transport d-flex">
                            <h2>Thông tin vận chuyển</h2>
                            <a href="">
                                <i className="fa-regular fa-address-book"></i>
                                Chọn từ sổ địa chỉ
                            </a>
                        </div>

                        <div className="form-info">

                            <div className="form-controll-100">
                                <input type="text" name="fullname" id="fullname" placeholder="Họ tên" />
                            </div>

                            <div className="form-controll-100">
                                <input type="tel" name="phone-number" id="phone-number" placeholder="Số điện thoại" />
                            </div>

                            <div className="form-controll-100">
                                <input type="email" name="email" id="email" placeholder="Email" />
                            </div>

                            <div className="form-controll-100">
                                <input type="text" name="address" id="address"
                                    placeholder="Địa chỉ (ví dụ: 103 Vạn Phúc, phường Vạn Phúc)" />
                            </div>

                            <div className="form-controll-100 d-flex gap-2">
                                <select name="city" id="city">
                                    <option value="">Hồ Chí Minh</option>
                                    <option value="">Hà Nội</option>
                                    <option value="">Đà Nẵng</option>
                                </select>
                                <select name="district" id="district">
                                    <option value="">Quận 1</option>
                                    <option value="">Thủ Đức</option>
                                    <option value="">Quận 2</option>
                                    <option value="">Quận 3</option>
                                    <option value="">Quận 4</option>
                                </select>
                                <select name="commune" id="commune">
                                    <option value="">Không có kết quả</option>
                                </select>

                            </div>

                            <div className="form-controll-100">
                                <input type="text" name="note-address" id="note-address"
                                    placeholder="Ghi chú thêm (Ví dụ: Giao hàng giờ hành chính)" />
                            </div>

                            <div className="form-controll-100">
                                <input type="checkbox" name="remember-address" id="remember-address" />
                                <label htmlFor="remember-address">Lưu vào sổ địa chỉ để dùng cho lần mua hàng tiếp
                                    theo</label>
                            </div>

                        </div>

                        <div className="payments">
                            <h2>Hình thức thanh toán</h2>
                            <div className="form-controll-100 d-flex" id="COD">
                                <input type="radio" name="payments" id="cod" checked />
                                <div className="label-input d-flex">
                                    <img src={COD} alt="" />
                                    <label htmlFor="cod">
                                        COD <br />
                                        Thanh toán khi nhận hàng
                                    </label>
                                </div>
                            </div>

                            <div className="form-controll-100 d-flex">
                                <input type="radio" name="payments" id="qr-code" />
                                <div className="label-input d-flex d-flex">
                                    <img src={QrCode} alt="" />
                                    <label htmlFor="qr-code">Chuyển khoản liên ngân hàng bằng QR Code
                                        Chuyển tiền qua ví điện tử (MoMo, Zalopay,...)</label>
                                </div>
                            </div>

                            <div className="form-controll-100 d-flex">
                                <input type="radio" name="payments" id="momo" />
                                <div className="label-input d-flex">
                                    <img src={Momo} alt="" />
                                    <label htmlFor="momo">
                                        Thanh Toán MoMo
                                    </label>
                                </div>
                            </div>

                            <div className="form-controll-100 d-flex">
                                <input type="radio" name="payments" id="zalo-pay" />
                                <div className="label-input d-flex">
                                    <img src={ZaloPay} alt="" />
                                    <label htmlFor="zalo-pay">
                                        Ví điện tử ZaloPay
                                    </label>
                                </div>
                            </div>

                            <div className="form-controll-100 d-flex">
                                <input type="radio" name="payments" id="shoppepay" />
                                <div className="label-input d-flex">
                                    <img src={ShoppePay} alt="" />
                                    <label htmlFor="shoppepay">
                                        Ví ShopeePay
                                    </label>
                                </div>
                            </div>

                            <div className="form-controll-100 d-flex">
                                <input type="radio" name="payments" id="vnpay" />
                                <div className="label-input d-flex">
                                    <img src={VnPay} alt="" />
                                    <label htmlFor="vnpay">
                                        Thẻ ATM / Thẻ tính dụng (Credit card) / Thẻ ghi nọ (Debit card)
                                    </label>
                                </div>
                            </div>

                            <p>
                                Nếu bạn không hài lòng với sản phẩm của chúng tôi? Bạn hoàn toàn có thể trả lại sản
                                phẩm. Tìm hiểu thêm
                                <a href=""> tại đây.</a>
                            </p>

                            <button id="checkout">
                                Thanh toán
                                <span>
                                    259K (VNPAY)
                                </span>
                            </button>

                        </div>
                    </div>

                </div>

                <div className="wp-info-order-product">

                    <div className="info-order-product">

                        <div className="order-product">

                            <h2>Giỏ hàng</h2>

                            <div className="head-cart-info-order d-flex">
                                <p>Mô tả sản phẩm</p>
                                <p>Số lượng</p>
                                <p>Giá </p>
                            </div>

                            <ul className="list-order-product d-flex">

                                <li className="order-item d-flex">

                                    <a href=""><img src={AoTayDaiCompact} alt="" /></a>

                                    <div className="desc-order-item">

                                        <div className="wp-name-product">
                                            <div className="name-product">
                                                Áo dài tay Cotton Compact V2
                                                <br />
                                                <span className="sub-name-product">Xanh Navy / M</span>
                                            </div>

                                        </div>

                                        <div className="wp-option-product d-flex">
                                            <div className="option-product">
                                                <select name="color" id="color">
                                                    <option value="">Xanh Nauy</option>
                                                    <option value="">Đỏ</option>
                                                    <option value="">Đen</option>
                                                    <option value="">Vàng</option>
                                                </select>
                                                <select name="size" id="size">
                                                    <option value="">M</option>
                                                    <option value="">S</option>
                                                    <option value="">L</option>
                                                    <option value="">XL</option>
                                                </select>
                                            </div>

                                            <input type="number" name="num-order" id="num-order" value="1" min="1"
                                                max="200" />

                                            <div className="price">
                                                <p className="new-price">478.000đ</p>
                                                <del className="old-price">538.000đ</del>
                                            </div>

                                        </div>
                                        <div className="trash-btn">
                                            <i className="fa-regular fa-trash-can"></i> Xóa
                                        </div>
                                    </div>

                                </li>

                                <li className="order-item d-flex">

                                    <a href=""><img src={AoTayDaiCompact} alt="" />
                                    </a>

                                    <div className="desc-order-item">
                                        <div className="wp-name-product">
                                            <div className="name-product">
                                                Polo thể thao V1
                                                <br />
                                                <span className="sub-name-product">Đen / S</span>
                                            </div>
                                        </div>

                                        <div className="wp-option-product d-flex">

                                            <div className="option-product">
                                                <select name="color" id="color">
                                                    <option value="">Xanh Nauy</option>
                                                    <option value="">Đỏ</option>
                                                    <option value="">Đen</option>
                                                    <option value="">Vàng</option>
                                                </select>
                                                <select name="size" id="size">
                                                    <option value="">M</option>
                                                    <option value="">S</option>
                                                    <option value="">L</option>
                                                    <option value="">XL</option>
                                                </select>
                                            </div>

                                            <input type="number" name="num-order" id="num-order" value="1" min="1"
                                                max="200" />

                                            <div className="price">
                                                <p className="new-price">119.000đ</p>
                                                <del className="old-price">249.000đ</del>
                                            </div>


                                        </div>
                                        <div className="trash-btn">
                                            <i className="fa-regular fa-trash-can"></i> Xóa
                                        </div>
                                    </div>
                                </li>

                            </ul>

                            <p className="enter-code">
                                Nhập mã WELCM Giảm 60K cho đơn hàng từ 499K (Áp dụng cho KH mới)
                            </p>

                        </div>
                    </div>

                    <div className="total-cart fw-bold">
                        <div className="sub-total">
                            <div className="temporary">
                                <span>Tạm tính</span>
                                <span>597.000đ</span>
                            </div>
                            <div className="discount">
                                <span>Giảm giá</span>
                                <span>0đ</span>
                            </div>
                            <div className="delivery-costs">
                                <span>Phí giao hàng</span>
                                <span>Miễn phí</span>
                            </div>
                        </div>

                        <div className="total">
                            <span>Tổng</span>
                            <span>
                                597.000đ
                            </span>
                        </div>
                    </div>
                    <div className="refund">
                        <span>Coolcash</span>
                        <span>+5.970</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
