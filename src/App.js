import { useState, useMemo } from "react";
import Result from "./components/Result";
import {
  PaperWrapper,
  Button,
  Actions,
} from "./components/Styles/Result.styled";
import Loading from "./Loading";
import useSWR from "swr";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNewYear, setIsNewYear] = useState(false);
  const ENDPOINT_API = "https://api-lottery.vercel.app/v2";

  const { data: response, isLoading } = useSWR(ENDPOINT_API, {
    fetcher: (url) => axios.get(url).then((res) => res.data),
  });

  const currentVisible = useMemo(() => {
    return response ? response[currentIndex] : null;
  }, [currentIndex, response]);

  const handleDate = (type) => {
    switch (type) {
      case "current":
        setCurrentIndex(0);
        break;
      case "prev":
        setCurrentIndex((prev) => (prev === 8 ? 8 : prev + 1));
        break;
      case "next":
        setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.onafterprint = function () {
      alert("Bố mẹ nhớ chụp ảnh màn hình gửi cho cô nhé!!!!");
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <PaperWrapper>
          <Result isNewYear={isNewYear} state={currentVisible} />
          <Result isNewYear={isNewYear} state={currentVisible} />
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
          onClick={() => handleDate("prev")}
          disabled={currentIndex === 8}
        >
          Ngày trước
        </Button>
        <Button
          role="date"
          id="next"
          onClick={() => handleDate("next")}
          disabled={currentIndex === 0}
        >
          Ngày sau
        </Button>
        <Button role="date" id="current" onClick={() => handleDate("current")}>
          Hiện tại
        </Button>
        <Button>
          <a
            href="https://kqxs-react.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Tới phiên bản 1
          </a>
        </Button>
      </Actions>
    </>
  );
}

export default App;
