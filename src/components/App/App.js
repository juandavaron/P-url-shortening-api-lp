import React from 'react';
import './../../style/App.scss';
import { AppUI } from './AppUI';

function App() {

  // const URL = 'https://shrtco.de/';

  // Estado
  const [openModal, setOpenModal] = React.useState(false);
  const [inputText, setInputText] = React.useState('');
  const [shortenLink, setShortenLink] = React.useState([]);

  // Límite de shortenLink
  // if(shortenLink.length > 3) {
  //   console.log(shortenLink.length)
  // }


  return (
    <AppUI
      openModal={openModal}
      setOpenModal={setOpenModal}
      inputText={inputText}
      setInputText={setInputText}
      shortenLink={shortenLink}
      setShortenLink={setShortenLink}
    />
  );
}

export default App;
