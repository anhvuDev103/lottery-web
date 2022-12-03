import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Result from './components/Result';
import { PaperWrapper } from './components/Styles/Result.styled';
import Loading from './Loading';

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const API = 'https://lottery-api.onrender.com/v1';

  useEffect(() => {
    const getDate = async () => {
      try {
        const res = await axios(API);
        setIsLoading(false);
        return res.data;
      } catch (error) {
        console.log(error);
      }
    };

    getDate().then((data) => setData(data));
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <PaperWrapper>
          <Result data={data} />
          <Result data={data} />
        </PaperWrapper>
      )}
    </>
  );
}

export default App;