import React, {useState, useRef} from 'react'
import Image from 'next/image';
import close from '@/public/assets/close-circle.svg';
import { PaymentModalContainer } from './mobileWallet.style';

const PaymentDetails = ({onOpen, onClose}) => {
    const [bankName, setBankName] = useState("");
  const [acctName, setAcctName] = useState("");
  const [acctNumber, setAcctNumber] = useState("");

  const bankNameRef = useRef();
  const acctNameRef = useRef();
  const acctNumberRef = useRef();

  const handleChange = (e) => {
    setBankName(bankNameRef.current.value);
    setAcctName(acctNameRef.current.value);
    setAcctNumber(acctNumberRef.current.value);
  }
  const toggleModal = () => {
    onClose();
    onOpen();
  }

  return (
    <PaymentModalContainer>
      <div className='details'>Payment Details</div>
        <form>
            <div className="input">
              <label htmlFor="bankName">Bank name</label>
              <div>
                <select
                  className="input__element"
                  name="bankName"
                  id="bankName"
                  ref={bankNameRef}
                  onChange={handleChange}
                >
                  <option>Select a bank</option>
                  {/* <option>Guaranty Trust Bank</option> */}
                </select>
              </div>
            </div>
            <div className="input">
              <label htmlFor="acctName">Account name</label>
              <div>
                <input
                  className="input__element"
                  id="acctName"
                  name="acctName"
                  value={acctName}
                  type="text"
                  placeholder="Enter your account name"
                  ref={acctNameRef}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="input">
              <label htmlFor="acctNumber">Account number</label>
              <div>
                <input
                  className="input__element"
                  id="acctNumber"
                  name="acctNumber"
                  value={acctNumber}
                  type="text"
                  placeholder="Enter your account number"
                  ref={acctNumberRef}
                  onChange={handleChange}
                />
              </div>
            </div>
          </form>
          <div className='changes' onClick={toggleModal}>Save Changes</div>
    </PaymentModalContainer>
  )
}

export default PaymentDetails
