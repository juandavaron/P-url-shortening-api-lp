import React from 'react';
import './../../style/App.scss';
import { AppUI } from './AppUI';

function App() {

  // const URL = 'https://shrtco.de/';

  // Estado
  const [openModal, setOpenModal] = React.useState(false);
  const [shortenLink, setShortenLink] = React.useState('');


  return (
    <AppUI
      openModal={openModal}
      setOpenModal={setOpenModal}
      shortenLink={shortenLink}
      setShortenLink={setShortenLink}
    />
  );
}

export default App;
