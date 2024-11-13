import React, { useState } from 'react';
import TShirtChayBoBasic from "../../assets/images/t-shirt-chay-bo-basic.png";

function ProductDetailDescription() {
    // State to control the visibility of ProductDescriptionDetail
    const [isDetailVisible, setIsDetailVisible] = useState(false);

    // Function to toggle the visibility
    const toggleDetailVisibility = () => {
        setIsDetailVisible(prevState => !prevState);
    };

    return (
        <section className="detail-product">
            <div className="btn-expand-detail">
                <button className="expand-detail" onClick={toggleDetailVisibility}>
                    {isDetailVisible ? 'Thu gọn' : 'Xem thêm'}
                </button>
            </div>
            <p className='text-center fw-bold'>Chi tiết sản phẩm: Quần Joggers thể thao Daily Wear</p>

            {/* Show description only if isDetailVisible is true */}
            {isDetailVisible && (
                <div className="desc-detail d-flex">
                    <img src={TShirtChayBoBasic} alt="Product Detail" />
                    {/* Product description content */}
                    <div className="product-description" style={{ maxWidth: '990px' }}>
                        <p>Here is a more detailed description of the product...</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolor! Sint magnam molestiae repudiandae non nulla praesentium labore, ipsum fugiat quae minima eaque facilis odio ad earum, officiis quasi alias cum distinctio ab blanditiis at. Delectus expedita possimus nemo ratione, ad alias beatae sit impedit dignissimos dolore animi tempora maxime repellat labore aut doloremque consequatur quisquam praesentium, ex voluptate! Recusandae corrupti doloremque, velit vero nihil perferendis placeat aspernatur obcaecati soluta cumque. Obcaecati odio quis consectetur sint animi, distinctio cupiditate adipisci ullam doloribus vel optio voluptatum maxime fuga, laudantium sit eum consequatur eveniet? Labore modi quisquam officiis, vel obcaecati et optio. Dolorem ipsa quod corrupti modi esse enim quos, atque quaerat dignissimos, ratione cum sed porro quia molestiae cumque voluptatum quisquam reprehenderit, maiores iusto? Modi optio dolorum excepturi ratione? Architecto iure, dolor, animi aperiam, porro voluptatum deserunt exercitationem ab consectetur provident molestiae ullam ducimus! Quidem veritatis veniam fugiat laudantium porro obcaecati, accusantium ab numquam a ipsum! Velit, nesciunt sequi dolore, cupiditate ut beatae fugit, vero tempore provident quia aspernatur. Adipisci laudantium obcaecati eos modi maiores voluptatem aperiam unde voluptas. Ipsum qui autem ducimus dolorem facilis consequatur, nesciunt illo? Numquam minus culpa rem, velit ducimus optio voluptates nihil placeat non sit officiis?</p>
                        {/* Add more details or components as needed */}
                    </div>
                </div>
            )}
        </section>
    );
}

export default ProductDetailDescription;
