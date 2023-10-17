import React, { useState } from 'react';
import styles from '../styles/Header.module.css';
import logo from '../assets/logo.svg';
import menubar from '../assets/menubar.svg';

function Header() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category.name === selectedCategory ? null : category.name);
    };

    const categories = [
        {
            name: 'EBS 변형문제',
            subcategories: ['영어']
        },
        { name: '초등', subcategories: ['영어'] },
        { name: '유아동', subcategories: ['영어'] },
        { name: '단어테스트', subcategories: ['영어'] },
        { name: '자격증', subcategories: ['영어'] }
    ];

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerLogoFrame}>
                <img
                    src={logo}
                    alt="Logo"
                    className={styles.headerLogo}
                />
            </div>
            <div className={styles.headerRightMenubar} onClick={toggleSidebar}>
                <img
                    src={menubar}
                    alt="menubar"
                    className={styles.headerMenubar}
                />
            </div>

            {isSidebarVisible && (
                <div className={styles.sidebar}>
                    <ul>
                        {categories.map((category, index) => (
                            <li key={index} onClick={() => handleCategoryClick(category)}>
                                {category.name}
                                {category.name === selectedCategory && category.subcategories && (
                                    <ul>
                                        {category.subcategories.map((sub, subIndex) => (
                                            <li key={subIndex}>{sub}</li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Header;
