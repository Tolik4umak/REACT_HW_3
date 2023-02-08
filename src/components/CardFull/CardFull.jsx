import React from 'react'
import { useState } from 'react'
import s from './style.module.css'


export default function CardFull(props) {

    const [imgIndex, setImgIndex] = useState(0)

    const changePhoto = (imgNum) => {
        if(imgNum===props.images.length){
            imgNum=0
        } else if(imgNum<0){
            imgNum=props.images.length-1
        }

        setImgIndex(imgNum)  
    }


    if(props.moreInfo){
        return (
            <div className={s.full_descr}>
                  <div className={s.full_card}>
                        <h2>{props.title}</h2>
                        <img src={props.images[imgIndex]} alt="" />
                        
                        <div className={s.photo_arrows}>
                            <i onClick={() => changePhoto(imgIndex-1)} className={["las la-angle-left", s.arrow].join(' ')}></i>
                            <span> {imgIndex+1}/{props.images.length} </span>
                            <i onClick={() => changePhoto(imgIndex+1)} className={["las la-angle-right", s.arrow].join(' ')}></i>
                        </div>

                        <div className={s.info}>
                            <p className={s.category}> Category: <span>{props.category}</span></p>
                            <p className={s.description}>Description: {props.description}</p>
                            <p className={s.rating}>Rating: {props.rating}</p>
                            <p className={s.price}> Old price: <span>{props.price}</span></p>
                            <p className={s.discont}> Discont price: {props.discont}</p>
                            
                            <div className={[s.arrows ,s.arrows_mob].join(' ')}>
                                <i onClick={() => {
                                    props.changeFullCard(props.id,-1);
                                    setImgIndex(0)
                                    }} className={["las la-caret-left", s.arrow].join(' ')}></i>
                                <span className={s.page_count_mob}>{props.number}/{props.total}</span>
                                <i onClick={() => {
                                    props.changeFullCard(props.id,+1);
                                    setImgIndex(0)
                                    }} className={["las la-caret-right", s.arrow].join(' ')}></i>
                            </div>
                            
                            <div className={s.page_count_desk}>{props.number}/{props.total}</div>
                        </div>
                        <button onClick={() => {
                                setImgIndex(0)
                                props.hideFullCard()
                            }}>
                            <i className ="las la-times-circle"></i>
                        </button>
                  </div>

                  <div className={[s.arrows ,s.arrows_desctop].join(' ')}>
                        <i onClick={() => {
                            props.changeFullCard(props.id,-1);
                            setImgIndex(0)
                            }} className={["las la-caret-left", s.arrow].join(' ')}></i>
                        <i onClick={() => {
                            props.changeFullCard(props.id,+1);
                            setImgIndex(0)
                            }} className={["las la-caret-right", s.arrow].join(' ')}></i>
                  </div>
                  
                  <div onClick={() => {
                        setImgIndex(0)
                        props.hideFullCard()
                    }} className={s.close_card} >
                  </div>           
              </div>
          )
    } 

}
