import { StyledHeader } from '../Styles/Result.styled';

const Header = ({ data }) => {
  const dienToan = `${data?.[0]} - ${data?.[1]} - ${data?.[2]}`;
  const thanTai = data?.[3];

  return (
    <StyledHeader>
      <div className="top">
        <b>
          <u>Quý khách lưu ý:</u>
        </b>{' '}
        Để tránh sai sót đề nghị đối chiếu kỹ KQ này với KQ được đăng trên tivi hoặc báo chí trước
        khi trả thưởng cho khách. Cảm ơn Quý khách!
      </div>
      <div className="bottom">
        <div className="dienToan">
          <span className="title">Xổ Số Điện Toán: </span>
          <span className="data">{dienToan}</span>
        </div>
        <div className="thanTai">
          <span className="title">Thần Tài: </span>
          <span className="data">{thanTai}</span>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
