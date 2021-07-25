import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ FileInput, authService }) => {
    const [cards, setCards] = useState({
        //배열이 아닌 오브젝트 형태로 관리하기 
        // *배열도 가능하지만, 배열로 하면 맵핑할 때 시간이 오래 걸릴 수도 있으니까 오브젝트를 이용하면 빠르게 가능
        //cards의 map이 아닌 Object.keys(cards)의 key로 가져올 수 있다

        '1':{
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
        '2': {
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
        '3': {
            id: '3',
            name: 'Minsu',
            company: 'Samsung',
            theme: 'colorful',
            title: 'software Engineer',
            email: 'minsu@gmail.com',
            message: 'go for it',
            fileName: 'minsu',
            fileURL : 'minsu.png'
    },
    });
  
        
    
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

    //add와 update를 한번에 해결할 수 있음
    const createOrUpdateCard = (card) => {
        setCards(cards => { //바로 이 시점의 setCards의 상태를
            const updated = { ...cards }; //다 복사하고,
            updated[card.id] = card; //card의 Object안에 있는 키를 이용해서 해당하는 키의 업데이트되는 card를 변경해서
            return updated; //업데이트된 것으로 return!!
        }); 
    };

    const deleteCard = (card) => {
        setCards(cards => { //바로 이 시점의 setCards의 상태를
            const updated = { ...cards }; //다 복사하고,
            delete updated[card.id]; //delete 선언
            return updated; //업데이트된 것으로 return!!
        }); 
    };

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor
                    FileInput={FileInput}
                    cards={cards}
                    addCard={createOrUpdateCard}
                    updateCard={createOrUpdateCard}
                    deleteCard={deleteCard}
                />
                <Preview cards={cards} />
            </div>
            <Footer />
        </section>
    );
};

export default Maker;