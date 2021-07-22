import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
    const [cards, setCards] = useState([
        {
            id: '1',
            name: 'Anna',
            company: 'Samsung',
            theme: 'light',
            title: 'software Engineer',
            email: 'anna@gmail.com',
            message: 'go for it',
            fileName: 'anna',
            fileURL : null
        },
        {
            id: '2',
            name: 'Christal',
            company: 'Samsung',
            theme: 'dark',
            title: 'software Engineer',
            email: 'christal@gmail.com',
            message: 'go for it',
            fileName: 'christal',
            fileURL : null
        },
        {
            id: '3',
            name: 'Minsu',
            company: 'Samsung',
            theme: 'colorful',
            title: 'software Engineer',
            email: 'minsu@gmail.com',
            message: 'go for it',
            fileName: 'minsu',
            fileURL : 'minsu.png'
        }
    ]);
    const history = useHistory();

    const onLogout = () => {
        authService.logout();
    };

    useEffect(() => {
        authService.onAuthChange(user => {
            if (!user) {
                history.push('/'); //로그아웃하여 사용자가 아니라면 홈으로 이동
            }
        });
    });

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor cards={cards} />
                <Preview cards={cards} />
            </div>
            <Footer />
        </section>
    );
};

export default Maker;