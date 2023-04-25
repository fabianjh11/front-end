import Title from './Components/Title';
import React, { useState } from 'react';
import UploadForm from './Components/UploadForm';
import ImageGrid from './Components/imageGrid';
import Modal from './Components/Modal';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;
