import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

//배열이 아닌 오브젝트 형태로 관리하기 
// *배열도 가능하지만, 배열로 하면 맵핑할 때 시간이 오래 걸릴 수도 있으니까 오브젝트를 이용하면 빠르게 가능
//cards의 map이 아닌 Object.keys(cards)의 key로 가져올 수 있다
const Maker = ({ FileInput, authService, cardRepository }) => {
    const historyState = useHistory().state; //로그인을 통해 오면 컴포넌트가 있을 것
    const [cards, setCards] = useState({});
    const [userId, setUserId] = useState(historyState && historyState.id);
  
    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    };

    //마운트가 되었을 때 or 사용자의 아이디가 변경될 때 마다
    useEffect(() => {
        if (!userId) {
            return ; //아이디가 없으면 하지 않음
        }
        const stopSync = cardRepository.syncCards(userId, cards => {
            setCards(cards);
        }) //컴포넌트가 unmount 되었을 때불필여한 네트워크 사용을 최소화해주는 것
        return () => stopSync();
    }, [userId]);

    //로그인될 때
    useEffect(() => {
        authService.onAuthChange(user => {
            if (user) {
                setUserId(user.uid);
            } else {
                history.push('/');
                //로그아웃하여 사용자가 아니라면 홈으로 이동
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
        cardRepository.saveCard(userId, card);//firebase에 데이터 등록
    };

    const deleteCard = (card) => {
        setCards(cards => { //바로 이 시점의 setCards의 상태를
            const updated = { ...cards }; //다 복사하고,
            delete updated[card.id]; //delete 선언
            return updated; //업데이트된 것으로 return!!
        });
        cardRepository.removeCard(userId, card); //firebase에 있는 데이터 지우기
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