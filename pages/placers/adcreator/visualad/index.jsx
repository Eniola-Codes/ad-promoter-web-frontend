import { ModalBackground, StyledDirectLink } from '@/styles/placersCreator.styles'
import React, { useState } from 'react'
import CloseCircle from '@/public/assets/close-circle-2'
import LinkIcon from '@/public/assets/link-icon.svg'
import Image from 'next/image'
import { useRouter } from 'next/router'
import AdPlacerContext from '@/context/adPlacerContext'
import { useContext } from 'react'
import CloudPlus from '@/public/assets/cloud-plus'
const Visualad = () => {
    const router = useRouter()
    const {productName,setProductName,productDescription,setProductDescription,tags,setTags,webAddress,setWebAddress,setContainAdultContent} = useContext(AdPlacerContext)
    const [tagValue,setTagValue] = useState('');
    const [showModal,setShowModal] = useState(false)

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            if(tagValue){
                setTags(prevTags => [...prevTags, tagValue]);
                setTagValue('')
            }
        }
    };

    const deleteTag = index => {
        setTags(oldValues => {
          return oldValues.filter((_, i) => i !== index)
        })
    }

    const handlePush = () =>{
        if(productName&&productDescription&&webAddress !== ''){
            router.push('visualad/conversion')
        }
    }

    const onImageChange = (e) =>{
        setImages([e.target.files]) 
    }
    
  return (
    <StyledDirectLink>
        <div className="header">
            <div className="header-text">
                <h4>Details</h4>
                <h4>Conversion</h4>
                <h4>Payment</h4>
            </div>
            <div className="progress-bar">
                <div className='filled'>
                    <div className="num-border">
                        <div className='num'>
                            1
                        </div>
                    </div>
                    <div className='dash'></div>
                </div>
                <div className='empty'>
                    <div className='circle'></div>
                    <div className='dash'></div>
                </div>
                <div className='empty'>
                    <div className='circle'></div>
                </div>
            </div>
        </div>

        <div className="modal">
            <div className="modal-head">
                <h4>Creating a Visual Advert</h4>
                <p>Kindly supply the following information.</p>
            </div>
            <form action="">
                <div className="product-name">
                    <label htmlFor="productName">1. What is your Product Name</label>
                    <input 
                        type="text" 
                        id="productName"
                        name='productName'
                        required
                        value={productName}
                        onChange={(e)=>setProductName(e.target.value)}
                    />
                </div>
                <div className="product-description">
                    <label htmlFor="productName"> 2. Give a brief product description or Advert copy</label>
                    <textarea 
                        name="productDescription" 
                        id="productDescription"
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                        />
                </div>

                <div className="upload">
                    <label htmlFor="upload"> 3. Upload Product images (Up to 5)</label>
                    <div className="upload-container">
                        <div className="text-container">
                            <CloudPlus />
                            <p>Drop files to upload or <span onClick={()=>setShowModal(true)}>browse</span></p>  
                        </div>
                        <div>
                            {/* {imageURLs.map(imageSrc => <Image src={imageSrc} width={20} height={20}/>)} */}
                            {/* <span>&times;</span> */}
                        </div>
                    </div>
                </div>

                <div className="product-tag">
                    <label htmlFor="poductTag">3. Project tags (Up to 5)</label>
                    <div className="tag-input">
                        <div className="tag-container">
                            {tags.map((tag,index)=>(
                                <div className="tag" key={index}>
                                    <h4>{tag}</h4>
                                    <div onClick={()=> deleteTag(index)}>
                                        <CloseCircle />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <input 
                            type="text"
                            value={tagValue}
                            onChange={(e)=>setTagValue(e.target.value)}
                            onKeyDown={handleKeyDown} 
                        />
                    </div>
                </div>

                <div className="product-link">
                    <label htmlFor="productLink">4. Paste a web address (where you want to direct your customers to)</label>
                    <div className="paste-input">
                        <div className="link-icon">
                            <Image src={LinkIcon} alt='link-icon'/>
                        </div>
                        <div className="input">
                            <input 
                                type="text" 
                                id="productLink"
                                name='productLink'
                                required
                                value={webAddress}
                                onChange={(e)=>setWebAddress(e.target.value)}
                            />
                        </div>
                        <div className="button">
                            <p>paste</p>
                        </div>
                    </div>
                </div>

                <div className="product-content">
                    <label htmlFor="productContent">5. Content</label>
                    <div className="checkbox">
                        <input 
                            type="checkbox" 
                            name="productContent" 
                            id="productContent" 
                            onChange={(e) =>setContainAdultContent(e.target.checked)}/>
                        <p>This advert contains adult content</p>
                    </div>
                </div>
            </form>
        </div>

        <div className="btns">
            <div className="prev">Prev</div>
            <div className="next" onClick={handlePush}>Next</div>
        </div>

        {showModal&&(
            <ModalBackground onClick={() => setShowModal(false)}>
                <div onClick={(e)=> e.stopPropagation()} className='file-modal'>
                    <input type="file" multiple accept="image/*" onChange={onImageChange} />
                </div>
            </ModalBackground>
        )}
    </StyledDirectLink>
  )
}

export default Visualad