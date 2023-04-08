import { useMemo, useRef } from "react";
import { StyledFooter } from "../Styles/Result.styled";
import moment from "moment";
import dateFormat from "../../utils/dateFormat";

const Footer = ({ data }) => {
  const colRef = useRef(null);
  const cols = useMemo(() => {
    if (data.twoDigitalsNums) {
      return Object.values(data.twoDigitalsNums);
    }
  }, [data]);

  const date = moment(data.timestamps);
  const { currentDay, currentLocation } = dateFormat(date.day());

  return (
    <StyledFooter>
      <div className="body">
        <table border="1">
          <thead>
            <tr>
              <th className="title-table">Đầu</th>
              {cols?.map((col, i) => (
                <th key={i} className="title" colSpan={col?.length > 7 ? 2 : 1}>
                  {i}
                </th>
              ))}
            </tr>
          </thead>
          <tbody ref={colRef}>
            <tr>
              <th className="first-cols">Lưu ý so lại cả trên và dưới</th>
              {cols?.map((col, i) => {
                if (col.length > 7) {
                  return (
                    <>
                      <th key={i} className="cols">
                        <ul className="data">
                          {col.map(
                            (item, index) =>
                              index < 7 && <li key={index}>{item}</li>
                          )}
                        </ul>
                      </th>
                      <th key={i + 99} className="cols">
                        <ul className="data">
                          {col.map(
                            (item, index) =>
                              index >= 7 && <li key={index}>{item}</li>
                          )}
                        </ul>
                      </th>
                    </>
                  );
                } else {
                  return (
                    <th key={i} className="cols">
                      <ul className="data">
                        {col.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </th>
                  );
                }
              })}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bottom">
        {date.format(
          `[KQXS] [${currentLocation}] - [${currentDay}] [ngày] DD/MM/YYYY`
        )}
      </div>
    </StyledFooter>
  );
};

export default Footer;
