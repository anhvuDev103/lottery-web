import { useState, useMemo, useRef } from 'react';
import Result from './components/Result';
import {
  PaperWrapper,
  Button,
  Actions,
  NoItemFound,
  Modal,
} from './components/Styles/Result.styled';
import Loading from './Loading';
import useSWR from 'swr';
import axios from 'axios';
import { useEffect } from 'react';
import useModal from './hooks/useModal';
import { getCookie, setCookie } from './utils/cookies';

function LoginModal({ handleDismiss }) {
  const inputRef = useRef(null);

  const handleClick = () => {
    if (inputRef.current.value === '71790305') {
      handleDismiss();
      setCookie('IS_EXPIRED', true, 30);
    }
  };

  return (
    <Modal>
      <div className="heading">Type the code</div>
      <input ref={inputRef} />
      <button onClick={handleClick}>OK</button>
    </Modal>
  );
}

function App() {
  const [visible] = useModal(<LoginModal />);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNewYear, setIsNewYear] = useState(false);
  const ENDPOINT_API = 'https://api-lottery.vercel.app/v2';

  const { data: response, isLoading } = useSWR(ENDPOINT_API, {
    fetcher: (url) => axios.get(url).then((res) => res.data),
  });

  const currentVisible = useMemo(() => {
    return response ? response[currentIndex] : null;
  }, [currentIndex, response]);

  const handleDate = (type) => {
    switch (type) {
      case 'current':
        setCurrentIndex(0);
        break;
      case 'prev':
        setCurrentIndex((prev) => (prev === 8 ? 8 : prev + 1));
        break;
      case 'next':
        setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (!getCookie('IS_EXPIRED')) {
      visible();
    }
  }, [visible]);

  useEffect(() => {
    window.onafterprint = function () {
      alert('Bố mẹ nhớ chụp ảnh màn hình gửi cho cô nhé!!!!');
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <PaperWrapper>
          {currentVisible ? (
            <>
              <Result isNewYear={isNewYear} state={currentVisible} />
              <Result isNewYear={isNewYear} state={currentVisible} />
            </>
          ) : (
            <NoItemFound>Chưa có data, vui lòng thử lại sau 6h30</NoItemFound>
          )}
        </PaperWrapper>
      )}
      <Actions>
        <Button role="new-year" onClick={() => setIsNewYear((prev) => !prev)}>
          Chúc mừng năm mới
        </Button>
        <Button role="print" onClick={() => window.print()}>
          In
        </Button>
        <Button
          role="date"
          id="prev"
          onClick={() => handleDate('prev')}
          disabled={currentIndex === 8}
        >
          Ngày trước
        </Button>
        <Button
          role="date"
          id="next"
          onClick={() => handleDate('next')}
          disabled={currentIndex === 0}
        >
          Ngày sau
        </Button>
        <Button role="date" id="current" onClick={() => handleDate('current')}>
          Hiện tại
        </Button>
        <Button>
          <a href="https://kqxs-react.vercel.app/" target="_blank" rel="noreferrer">
            Tới phiên bản 1
          </a>
        </Button>
      </Actions>
    </>
  );
}

export default App;
