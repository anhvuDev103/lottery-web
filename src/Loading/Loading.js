import { createPortal } from 'react-dom';
import { StyledOverlay } from '../components/Styles/Result.styled';

const Loading = () => {
  return createPortal(
    <StyledOverlay>
      <div></div>
    </StyledOverlay>,
    document.querySelector('#modal')
  );
};

export default Loading;
