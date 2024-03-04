import React from 'react'
import style from './ProductModal.module.css'
const ProductModal = ({ item, closeModal }) => {
    return (
        <div className={style.modal}>
            <div className={style.modalContent}>
                <span className={style.close} onClick={closeModal}>
                    <svg width="25" height="25" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.1568 14.5231L28.4489 3.23075C29.1837 2.49623 29.1837 1.30861 28.4489 0.574085C27.7144 -0.160437 26.5267 -0.160437 25.7922 0.574085L14.4998 11.8665L3.20781 0.574085C2.47295 -0.160437 1.28567 -0.160437 0.551149 0.574085C-0.183716 1.30861 -0.183716 2.49623 0.551149 3.23075L11.8432 14.5231L0.551149 25.8155C-0.183716 26.55 -0.183716 27.7376 0.551149 28.4721C0.917206 28.8385 1.39852 29.0226 1.87948 29.0226C2.36045 29.0226 2.84141 28.8385 3.20781 28.4721L14.4998 17.1798L25.7922 28.4721C26.1586 28.8385 26.6396 29.0226 27.1205 29.0226C27.6015 29.0226 28.0825 28.8385 28.4489 28.4721C29.1837 27.7376 29.1837 26.55 28.4489 25.8155L17.1568 14.5231Z" fill="black"></path></svg>
                </span>
                <div className={style.image}>
                    <img
                        src={item.image}
                        alt={item.title}
                    />
                    <div className={style.weight}>Вес: {item.weight} г.</div>
                    <div className={style.ccal}>Калории: {item.calories} ккал.</div>

                </div>

                <h2 className={style.title}>{item.title}</h2>
                <div className={style.descr}>{item.description}</div>
                <ul className={style.ingredients}>
                    {item.ingredients.map((ingredient, index) => (
                        <li className={style.consis} key={index}>{ingredient}</li>
                    ))}
                    <li className={style.price}>Цена: {item.price} ₽</li>
                </ul>

            </div>
        </div>
    )
}

export default ProductModal