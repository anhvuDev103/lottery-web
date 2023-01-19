import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Result from './components/Result';
import { PaperWrapper, StyledButton } from './components/Styles/Result.styled';
import Loading from './Loading';

function App() {
  const [data, setData] = useState({});
  console.log("App ~ data", data)
  const [isNewYear, setIsNewYear] = useState(false)
  const [isLoading, setIsLoading] = useState(true);
  const API = 'https://api-lottery.vercel.app/v1';

  useEffect(() => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours()
    const currentMinute = currentDate.getMinutes()

    const getData = async () => {
      try {
        const res = await axios(API);
        setIsLoading(false);
        return res.data;
      } catch (error) {
        console.log(error);
      }
    };

    if (currentHour === 18 && currentMinute > 30) {
      getData().then((data) => {
        setData(data)
        localStorage.LOTTERY_DATA_APP = JSON.stringify(data)
      });
    } else {
      if (Object.keys(JSON.parse(localStorage.LOTTERY_DATA_APP || "{}")).length === 0) {
        getData().then((data) => {
          setData(data)
          localStorage.LOTTERY_DATA_APP = JSON.stringify(data)
        });
      } else {
        setData(JSON.parse(localStorage?.LOTTERY_DATA_APP) || "{}")
        setIsLoading(false);
      }
    }

    window.onafterprint = function () {
      alert('Bố mẹ nhớ chụp ảnh màn hình gửi cho cô nhé!!!');
    };
  }, []);

  useEffect(() => {
    
  }, [])

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <PaperWrapper>
          <Result isNewYear={isNewYear} data={data} />
          <Result isNewYear={isNewYear} data={data} />
        </PaperWrapper>
      )}
      <StyledButton onClick={() => setIsNewYear(prev => !prev)}>
        Chúc mừng năm mới
      </StyledButton>
      <StyledButton onClick={() => window.print()}>
        In
      </StyledButton>
    </>
  );
}

export default App;
