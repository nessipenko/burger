import { useDispatch } from 'react-redux'
import { addProduct } from '../../store/order/orderSlice'
import ProductModal from '../ProductModal/ProductModal'
import style from './CatalogProduct.module.css'
import React, { useState } from 'react'

export const CatalogProduct = ({ item }) => {
    const distpatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <article className={style.product}>
            <img
                src={item.image}
                alt={item.title}
                className={style.image}
            />

            <p className={style.price}>
                {item.price}<span className={style.currency}>&nbsp;₽</span>
            </p>

            <h3 className={style.title}>
                <button className={style.detail} onClick={openModal}>{item.title}</button>
            </h3>

            <p className={style.weight}>{item.weight}г</p>

            <button
                className={style.add}
                onClick={() => {
                    distpatch(addProduct({ id: item.id }))
                }}>

                Добавить
            </button>
            {isModalOpen && <ProductModal item={item} closeModal={closeModal} />}
        </article>

    )
}
