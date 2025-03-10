import { useState } from 'react'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true);
   const [error, setError] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <>
      <SearchBar />
      {/* <ImageGallery />
      <Loader loader={loading}/> */}
      <ErrorMessage error={error} />
      <ImageModal/>
    </>
  );
}

export default App
