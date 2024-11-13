// components/CategorySlider.tsx
import React from 'react';
import AoTheThao from '../../assets/images/ao-the-thao.webp';
import AoThun from '../../assets/images/ao-thun.webp';
import AoPolo from '../../assets/images/ao-polo.webp';
import AoSoMi from '../../assets/images/ao-so-mi.webp';
import AoTanktop from '../../assets/images/ao-tanktop.webp';
import AoKhoac from '../../assets/images/ao-khoac.webp';
import AoDaiTay from '../../assets/images/ao-dai-tay.webp';
import Rising from '../../assets/images/84-rising.webp';


const categories = [
    { name: 'Áo Thể Thao', image: AoTheThao },
    { name: 'Áo Thun', image: AoThun },
    { name: 'Áo Polo', image: AoPolo },
    { name: 'Áo Sơ Mi', image: AoSoMi },
    { name: 'Áo Tanktop', image: AoTanktop },
    { name: 'Áo Khoác', image: AoKhoac },
    { name: 'Áo Dài Tay', image: AoDaiTay },
    { name: '84RISING', image: Rising },
];

const CategorySlider: React.FC = () => {
    return (
        <div style={{ display: 'flex', padding: '10px 20px', gap: '50px' }}>
            {categories.map((category) => (
                <div key={category.name} style={{ textAlign: 'center', width: '100px' }}>
                    <img src={category.image} alt={category.name} style={{ width: '100%', height: '135px' }} />
                    <p>{category.name}</p>
                </div>
            ))}
        </div>
    );
};

export default CategorySlider;
