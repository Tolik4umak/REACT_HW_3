import React, { useState } from 'react'
import { useEffect } from 'react'
import Calculation from '../Calculation/Calculation'
import CardFull from '../CardFull/CardFull'
import Product from '../Product/Product'
import s from './style.module.css'

export default function ProductsContainer() {

  useEffect(() => {
    (
      async function(){
        try{
          const resp = await fetch('https://dummyjson.com/product')
          const data = await resp.json()
          
          const arr = data.products.map(prod => (
            {
              ...prod,
              discont: (prod.price - (prod.price * (prod.discountPercentage / 100))).toFixed(2)
            }
            ))
          setProducts(arr)
        }catch (error){
          alert('Check if the link is correct')
        }
      }
    )()
  },[])


  const [products, setProducts] = useState([])
  const [fullCard, setFullCard] = useState([{},false])
  
  console.log(products)


  const showFullCard = (cardId) => {
    const target = products.find(({id}) => cardId === id)
    const index = products.findIndex(({id}) => cardId === id)
    setFullCard([{...target, total: products.length,number: index+1},true])
  }

  const changeFullCard = (cardId, dir) => {

    let currentIndex = products.findIndex(({id}) => cardId === id)+dir
    
    if(currentIndex === products.length){
      currentIndex = 0
    } else if(currentIndex<0){
      currentIndex = products.length-1
    }
    
    const target = products.find((_, i) => i === currentIndex)
    
    
    console.log(target)
    setFullCard([{...target, total: products.length, number: currentIndex+1},true])

  }

  const hideFullCard = () => {
    setFullCard([{},false])
  }

  const delCard = (delId) => {
    
      fetch(`https://dummyjson.com/products/${delId}`, {
         method: 'DELETE',
      })
      .then(res => res.json())
      .then(data => {
        const arr = products.filter(({id}) => id !== data.id)
        setProducts(arr)
      });
  
  }
  return (
    <div className={s.container} >
      <div className={s.card_container}>
        {
          products.map(prod => <Product key={prod.id} {...prod} delCard={delCard} showFullCard={showFullCard}/>)
        }
      </div>
      <CardFull {...fullCard[0]} hideFullCard={hideFullCard} moreInfo={fullCard[1]} changeFullCard={changeFullCard}/>

      <Calculation calc={products}/>
    </div>
  )
}
