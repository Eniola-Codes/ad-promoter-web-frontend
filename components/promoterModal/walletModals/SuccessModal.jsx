import ModalContainer from '../ModalContainer';
import Image from 'next/image';
import close from '@/public/assets/close-circle.svg';
import { SuccessStyle } from './styles';
import Link from 'next/link';

const SuccessModal = (props) => {
  return (
    <ModalContainer>
      <SuccessStyle>
        <div className="close">
          <button onClick={props.onClose}>
            <Image src={close} alt="Exit icon" />
          </button>
        </div>
        <div className="container">
          <h2>Success!</h2>
          <div className="container__home">
            <p>
              Congrats, You have just sucessfully saved a new payment detail.
            </p>
            <Link href="/promoters">
              <a>Go back home</a>
            </Link>
          </div>
        </div>
      </SuccessStyle>
    </ModalContainer>
  );
};

export default SuccessModal;
