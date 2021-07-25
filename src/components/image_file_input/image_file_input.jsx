import React, { useRef, useState } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
    const [loading, setLoading] = useState(false); //업로드 로딩 우선 false로 설정

    const inputRef = useRef();
    const onButtonClick = (event) => {
        event.preventDefault(); //버튼을 누르면 subnit처럼 리프레쉬되기 때문에 방지하기 위해 사용
        inputRef.current.click();
    };

    const onChange = async event => {
        setLoading(true); //event 받아오면 업로드 로딩 실행
        const uploaded = await imageUploader.upload(event.target.files[0]); //upload될 때 까지 기다렸다가
        setLoading(false); //업로드 완료시 false로 설정

        onFileChange({
            name: uploaded.original_filename,
            url: uploaded.url,
        });
    };

    return (<div className={styles.container}>
        <input
            ref={inputRef}
            className={styles.input}
            type="file"
            accept="image/*"
            name="file"
            onChange={onChange}
        />
        {!loading &&
            (<button className={`${styles.button} ${name ? styles.pink : styles.grey}`}
            onClick={onButtonClick}
        >
            {name || 'No file'}
        </button>)} 
        {loading && <div className={styles.loading}></div>}
    </div>
    );
};


export default ImageFileInput;