// components/Sidebar.tsx
import React from 'react';
import { ListGroup } from 'react-bootstrap';

const menuItems = [
    'Thông tin tài khoản',
    'Lịch sử đơn hàng',
    'Lịch sử CoolCash',
    'Ví Voucher',
    'Sổ địa chỉ',
    'Đánh giá và phản hồi',
    'Chính sách & Câu hỏi thường gặp',
    'Đăng xuất',
];

const SidebarAccount: React.FC = () => {
    return (
        <ListGroup className="bg-light rounded p-3 mb-4">
            {menuItems.map((item, index) => (
                <ListGroup.Item
                    key={index}
                    className={index === 1 ? 'font-weight-bold text-dark' : 'text-muted'}
                    action
                >
                    {item}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default SidebarAccount;
