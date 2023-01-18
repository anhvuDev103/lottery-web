import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Result from './components/Result';
import { PaperWrapper, StyledButton } from './components/Styles/Result.styled';
import Loading from './Loading';

function App() {
  const [data, setData] = useState({});
  const [isNewYear, setIsNewYear] = useState(false)
  const [isLoading, setIsLoading] = useState(true);
  const API = 'https://api-lottery.vercel.app/v1';

  console.log('re-render')
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios(API);
        setIsLoading(false);
        return res.data;
      } catch (error) {
        console.log(error);
      }
    };

    getData().then((data) => setData(data));

    window.onafterprint = function () {
      alert('Bố mẹ nhớ chụp ảnh màn hình gửi cho cô nhé!!!');
    };
  }, []);

  // const screenshotTarget = document.body;

  // html2canvas(screenshotTarget).then((canvas) => {
  //     const base64image = canvas.toDataURL("image/png");
  //     window.location.href = base64image;
  //     console.log(base64image)
  // });

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
