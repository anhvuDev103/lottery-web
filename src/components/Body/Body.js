import { useEffect } from 'react';
import { useRef } from 'react';
import { StyledBody } from '../Styles/Result.styled';

const Body = ({ data, isNewYear }) => {
  const lotteryRef = useRef(null);

  useEffect(() => {
    let dataNodes = [];
    if (lotteryRef.current) {
      dataNodes = lotteryRef.current.querySelectorAll('.data');
    }

    data?.flat().forEach((d, i) => {
      dataNodes[i].textContent = d;
    });
  }, [data]);

  return (
    <StyledBody ref={lotteryRef}>
      <div className="top">
        <div className="special">
          <span className="title">Đặc Biệt:</span>
          <span className="data"></span>
          {isNewYear && <span className="newYear">Chúc Mừng Năm Mới</span>}
        </div>
      </div>
      <div className="body">
        {/* Row gap */}
        <div className="title">Giải nhất:</div>
        <div className="data"></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        {/* Row gap */}
        <div className="title">Giải nhì:</div>
        <div className="data"></div>
        <div className="space">-</div>
        <div className="data"></div>
        <div></div>
        <div></div>
        {/* Row gap */}
        <div className="title">Giải ba:</div>
        <div className="data"></div>
        <div className="space">-</div>
        <div className="data"></div>
        <div className="space">-</div>
        <div className="data"></div>
        {/* Row gap */}
        <div></div>
        <div className="data"></div>
        <div className="space">-</div>
        <div className="data"></div>
        <div className="space">-</div>
        <div className="data"></div>
        {/* Row gap */}
        <div className="title">Giải tư:</div>
        <div className="data"></div>
        <div className="space">-</div>
        <div className="data"></div>
        <div></div>
        <div></div>
        {/* Row gap */}
        <div></div>
        <div className="data"></div>
        <div className="space">-</div>
        <div className="data"></div>
        <div></div>
        <div></div>
        {/* Row gap */}
        <div className="title">Giải năm:</div>
        <div className="data"></div>
        <div className="space">-</div>
        <div className="data"></div>
        <div className="space">-</div>
        <div className="data"></div>
        {/* Row gap */}
        <div></div>
        <div className="data"></div>
        <div className="space">-</div>
        <div className="data"></div>
        <div className="space">-</div>
        <div className="data"></div>
        {/* Row gap */}
        <div className="title">Giải sáu:</div>
        <div className="data"></div>
        <div className="space">-</div>
        <div className="data"></div>
        <div className="space">-</div>
        <div className="data"></div>
        {/* Row gap */}
        <div className="title">Giải bảy:</div>
        <div style={{ justifyContent: 'right', marginRight: '5px' }}>
          <span className="data" style={{ marginRight: '0' }}></span>
          <span className="space">-</span>
          <span className="data" style={{ marginLeft: '10px' }}></span>
        </div>
        <div className="space">-</div>
        <div className="data"></div>
        <div className="space">-</div>
        <div className="data"></div>
      </div>
    </StyledBody>
  );
};

export default Body;
