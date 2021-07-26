import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/image_file_input/image_file_input';
import CardRepository from './service/card_repository';

const authService = new AuthService();
const imageUploader = new ImageUploader();
const cardRepository = new CardRepository();

const FileInput = props => (
  //확장성을 위해 한단계 더 감싼 컴포넌트 사용 
  //prop을 받고 그대로 전달해주고,
  //필수적으로 필요한 prop은 imageUploader에서 인젝트가 되기 때문에 확장 가능함
  <ImageFileInput {...props} imageUploader={imageUploader} />
); 

//컴포넌트 prop의 경우 대문자로 시작 ex)FileInput={FileInput}
ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      FileInput={FileInput}
      cardRepository={cardRepository}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

