import bg from '@/public/assets/onboard-bg.png'
import { Overlay, SignupMobile } from '@/styles/signup'
import Image from 'next/image'
import logo from '@/public/assets/newOnboardLogo.svg'
import Button from '@/components/authBtn/index'
import Link from 'next/link'
import Close from '@/public/assets/close-icon'
import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from 'react'
import { BgContainer } from '@/components/onboardingBg/styles'
import { useContext } from "react";
import PhoneInput,{ formatPhoneNumber, formatPhoneNumberIntl, isValidPhoneNumber,isPossiblePhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import {BsEyeFill,BsEyeSlashFill} from 'react-icons/bs'
import { useSignup } from '@/hooks/useSignup'
import SignupContext from '@/context/signupContext'

const Index = () => {
  const [isPasswordShown,setIsPasswordShown] = useState(false)
  const [isConfirmPasswordShown,setIsConfirmPasswordShown] = useState(false)
  const phoneRef = useRef(true)
  const [phoneState,setPhoneState] = useState(true)
  const [passwordState,setPasswordState] = useState(true)
  const passwordRef = useRef(true)
  const {setIsInputWithValue,email,setEmail,password,setPassword,confirmPassword,setConfirmPassword,accountName,setAccountName,phoneNumber,setPhoneNumber,} = useContext(SignupContext)
  const {signup,error,isLoading} = useSignup()
  const router = useRouter()
  
  useEffect(() => {
    router.prefetch('/signup/preference')
    if(accountName !== '' && email !== '' && password !== '' && confirmPassword !=='' && phoneNumber !==''){
      setIsInputWithValue(true)
    }else{
      setIsInputWithValue(false)
    }
  }, [router, setIsInputWithValue,accountName,email,password,confirmPassword,phoneNumber])

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // await signup(email,password,accountName,phoneNumber)

    if(phoneNumber && isPossiblePhoneNumber(phoneNumber) && phoneNumber && isValidPhoneNumber(phoneNumber) && phoneNumber && formatPhoneNumber(phoneNumber) && formatPhoneNumberIntl(phoneNumber)){
      phoneRef.current = true
      setPhoneState(true)
    }
    else{
      phoneRef.current = false
      setPhoneState(false)
    }
    if(confirmPassword === password){
      passwordRef.current = true
      setPasswordState(true)
    }else{
      passwordRef.current = false
      setPasswordState(false)
    }
    if(passwordRef.current && phoneRef.current === true) {
      router.push('/signup/preference')
    }
  }

  return (
    <>
    <BgContainer image={bg}>
      <Overlay className='overlay'>
        <div className="close" onClick={()=>router.push('/')}>
          <Close />
        </div>
        <div className="content">
          <div className="welcome">
            <Image src={logo} alt='ad-promoter logo'/>
            <div className="welcome-text">
              <h3>Welcome to Ad-promoter!</h3>
              <p>Let’s help you get started</p>
            </div>
          </div>

          <form action="" onSubmit={handleSubmit}>
            <div className="name">
              <label htmlFor="name">Your name</label>
              <input 
                type="text" 
                id="name"
                name='name'
                value={accountName} 
                required
                onChange={(e)=> setAccountName(e.target.value)}
                className= 'input'
              />
            </div>
            <div className="email">
              <label htmlFor="email">Your email</label>
              <input 
                type="email" 
                id="email"
                name='email'
                required
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                className= 'input'
              />
            </div>
            <div className="tel">
              <label htmlFor="tel">Your Phone number</label>
              <div className="tel-input">
                <PhoneInput
                  defaultCountry="NG"
                  international
                  value={phoneNumber}
                  onChange={phoneNumber => setPhoneNumber(phoneNumber)}
                  className={phoneState ? 'input' : 'invalid'}
                />
              </div>
            </div>

            <div className="password">
              <div className="input-container">
                <div className="label">
                  <label htmlFor="password">Your password</label>
                  <div className="hide" onClick={()=>setIsPasswordShown(!isPasswordShown)}>
                    {isPasswordShown ? (
                      <BsEyeSlashFill style={{color: 'rgba(102,102,102,0.8)'}} />
                      ):(
                      <BsEyeFill style={{color: 'rgba(102,102,102,0.8)'}} />
                    )}
                    {isPasswordShown ? (
                      <p>Hide</p>
                    ):(
                      <p>Show</p>
                    )}
                  </div>
                </div>
                <input
                  className='input'
                  type={isPasswordShown ? "text" : "password"} 
                  id="password"
                  name='password'
                  required
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                />
                {/* <PasswordStrengthMeter /> */}
              </div>
            </div>

            <div className="password">
              <div className="input-container">
                <div className="label">
                  <label htmlFor="confirmPassword">Confirm password</label>
                  <div className="hide" onClick={()=>setIsConfirmPasswordShown(!isConfirmPasswordShown)}>
                    {isConfirmPasswordShown ? (
                      <BsEyeSlashFill style={{color: 'rgba(102,102,102,0.8)'}} />
                      ):(
                      <BsEyeFill style={{color: 'rgba(102,102,102,0.8)'}} />
                    )}
                    {isConfirmPasswordShown ? (
                      <p>Hide</p>
                    ):(
                      <p>Show</p>
                    )}
                  </div>
                </div>
                <input
                  className={passwordState ? 'input' : 'invalid'}
                  // className= {passwordState.current ? 'input' : 'invalid'} 
                  type={isConfirmPasswordShown ? "text" : "password"}
                  // type='text' 
                  id="confirmPassword"
                  name='confirmPassword'
                  required
                  value={confirmPassword}
                  onChange={(e)=> setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            
            <Button text='Next' />
            {error && <div>{error}</div>}
          </form>
        </div>
        <div className="login">
          <p>Already have an account? <Link href='/login'><a>Login</a></Link></p>
        </div>
      </Overlay>
    </BgContainer>
    <SignupMobile>
      <div className='logo'>
        <Image src={logo} alt='ad-promoter logo'/>
      </div>
      <div className='note'>
        <h3>Welcome to Ad-promoter!</h3>
        <p>
          Let’s help you get started
        </p>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <div className="name">
          <label htmlFor="name">Your name</label>
          <input 
            type="text" 
            id="name"
            name='name'
            value={accountName} 
            required
            onChange={(e)=> setAccountName(e.target.value)}
            className= 'input'
          />
        </div>
        <div className="email">
          <label htmlFor="email">Your email</label>
          <input 
            type="email" 
            id="email"
            name='email'
            required
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            className= 'input'
          />
        </div>
        <div className="tel">
          <label htmlFor="tel">Your Phone number</label>
          <div className="tel-input">
            <PhoneInput
              defaultCountry="NG"
              international
              value={phoneNumber}
              onChange={phoneNumber => setPhoneNumber(phoneNumber)}
              className={phoneState ? 'input' : 'invalid'}
            />
          </div>
        </div>

        <div className="password">
          <div className="input-container">
            <div className="label">
              <label htmlFor="password">Your password</label>
              <div className="hide" onClick={()=>setIsPasswordShown(!isPasswordShown)}>
                {isPasswordShown ? (
                  <BsEyeSlashFill style={{color: 'rgba(102,102,102,0.8)'}} />
                  ):(
                  <BsEyeFill style={{color: 'rgba(102,102,102,0.8)'}} />
                )}
                {isPasswordShown ? (
                  <p>Hide</p>
                ):(
                  <p>Show</p>
                )}
              </div>
            </div>
            <input
              className='input'
              type={isPasswordShown ? "text" : "password"} 
              id="password"
              name='password'
              required
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
            {/* <PasswordStrengthMeter /> */}
          </div>
        </div>

        <div className="password">
          <div className="input-container">
            <div className="label">
              <label htmlFor="confirmPassword">Confirm password</label>
              <div className="hide" onClick={()=>setIsConfirmPasswordShown(!isConfirmPasswordShown)}>
                {isConfirmPasswordShown ? (
                  <BsEyeSlashFill style={{color: 'rgba(102,102,102,0.8)'}} />
                  ):(
                  <BsEyeFill style={{color: 'rgba(102,102,102,0.8)'}} />
                )}
                {isConfirmPasswordShown ? (
                  <p>Hide</p>
                ):(
                  <p>Show</p>
                )}
              </div>
            </div>
            <input
              className={passwordState ? 'input' : 'invalid'}
              // className= {passwordState.current ? 'input' : 'invalid'} 
              type={isConfirmPasswordShown ? "text" : "password"}
              // type='text' 
              id="confirmPassword"
              name='confirmPassword'
              required
              value={confirmPassword}
              onChange={(e)=> setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
            
        <Button text='Next' />
        {error && <div>{error}</div>}
      </form>
    </SignupMobile>
    </>
  )
}

export default Index