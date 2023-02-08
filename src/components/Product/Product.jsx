import React from 'react'
import s from './style.module.css'

export default function Product(props) {
  
  return (
    <div className={s.card}>
      <img src={props.images[0]} alt="" />
      <p className={s.title}>{props.title}</p>
      <div className={s.price}>
        <p className={s.full_price}>{props.price}$</p>
        <p className={s.discont}>{props.discont}$</p>
      </div>
      <button onClick={()=> props.delCard(props.id)} className={s.delete_card}><i className="las la-times"></i></button>
      <button className={s.show_info} onClick={()=> props.showFullCard(props.id)}> More info</button>
    </div>
  )
}
