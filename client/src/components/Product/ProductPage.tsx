// pages/ProductPage.tsx
import React from 'react';
import FilterSidebar from './FilterSidebar';
import CategorySlider from './CategorySlider';
import ProductGrid from './ProductGrid';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';

const ProductPage: React.FC = () => {
    return (
        <div>
            <Header />
            <div style={{ display: 'flex', padding: '160px 0px 10px 0px' }}>
                <FilterSidebar />
                <div style={{ flex: 1 }}>
                    <CategorySlider />
                    <h2 style={{ padding: '10px 20px' }}>ÁO NAM</h2>
                    <p style={{ padding: '10px 30px' }}>253 kết quả</p>
                    <ProductGrid />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductPage;
