import React from 'react'
import Image from 'next/image'
import back from '@/public/assets/back-icon.svg'
import { PrivacyContainer } from './mobileSettings.style'

const Privacy = ({handleBack}) => {
  return (
    <PrivacyContainer>
      <div className='privacy'>
        <div onClick={handleBack}>
            <Image src={back} alt="back"/>
        </div>
        <h3>Privacy Policy</h3>
      </div>
      <div className="policies">
            <div className="policy"> 
                <h2>1. Types Of Data we collect </h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque aenean eu egestas hendrerit. Faucibus orci faucibus tellus nisl suspendisse. Hendrerit dolor sit consequat eget ut faucibus cum dis. Sodales in vivamus felis, id posuere et. Volutpat vulputate nec pharetra cras facilisi massa feugiat. Duis eget interdum diam neque imperdiet auctor ac. Porttitor magna id faucibus leo consequat felis, odio massa ridiculus. At eget quam pretium vitae eget nisl et. Tortor, nisl ut consequat risus cras. Pellentesque libero purus massa ultricies. Leo ac amet volutpat ipsum quis. Dictumst amet accumsan mattis ut cum. Leo amet, euismod amet sed.</p>
            </div>

            <div className="policy"> 
                <h2>2. Use of your personal data </h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque aenean eu egestas hendrerit. Faucibus orci faucibus tellus nisl suspendisse. Hendrerit dolor sit consequat eget ut faucibus cum dis. Sodales in vivamus felis, id posuere et. Volutpat vulputate nec pharetra cras facilisi massa feugiat. Duis eget interdum diam neque imperdiet auctor ac. Porttitor magna id faucibus leo consequat felis, odio massa ridiculus. At eget quam pretium vitae eget nisl et. Tortor, nisl ut consequat risus cras. Pellentesque libero purus massa ultricies. Leo ac amet volutpat ipsum quis. Dictumst amet accumsan mattis ut cum. Leo amet, euismod amet sed.</p>
            </div>

            <div className="policy"> 
                <h2>3. How we protect your data from getting in wrong hands </h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque aenean eu egestas hendrerit. Faucibus orci faucibus tellus nisl suspendisse. Hendrerit dolor sit consequat eget ut faucibus cum dis. Sodales in vivamus felis, id posuere et. Volutpat vulputate nec pharetra cras facilisi massa feugiat. Duis eget interdum diam neque imperdiet auctor ac. Porttitor magna id faucibus leo consequat felis, odio massa ridiculus. At eget quam pretium vitae eget nisl et. Tortor, nisl ut consequat risus cras. Pellentesque libero purus massa ultricies. Leo ac amet volutpat ipsum quis. Dictumst amet accumsan mattis ut cum. Leo amet, euismod amet sed.</p>
            </div>

        </div>
    </PrivacyContainer>
  )
}

export default Privacy
