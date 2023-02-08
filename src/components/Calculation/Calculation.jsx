import React from 'react'
import s from './style.module.css'

export default function Calculation({calc}) {
  return (
    <div className={s.footer}>
      <p>Всего товаров : {calc.reduce((acum) => acum + 1,0)}</p>
      <p>Общая сумма (без скидки) : {calc.reduce((acum, prod) => acum + prod.price,0)}</p>
      <p>Общая сумма (со скидкой) : {(calc.reduce((acum, prod) => acum + +prod.discont,0).toFixed(2))}</p>
    </div>
  )
}
