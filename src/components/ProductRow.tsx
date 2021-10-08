import React from "react";
import s from './ProductRow.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { getProduct } from "../store/action-creators/productAction";

interface ProductRowProps{
    name: string;
    id: string;
    orgName: string;
    orgLogo: string;
    rateFrom: number;
    creditAmountFrom: number;
    creditAmountTo: number;
    age: number;
    docAmount: number;
    licNum: number;
}

const ProductRow: React.FC<ProductRowProps> = ({name, id, orgName, orgLogo, rateFrom, creditAmountFrom, creditAmountTo, age, docAmount, licNum}) => {
    const dispatch = useDispatch()

    return(
        <div className={s.container}>
            <div className={s.name}>
                {name}
            </div>
            <div className={s.row}>
                <div className={s.content}>
                    <div className={s.wrapper}>
                        <div className={s.org}>
                            <img className={s.img} src={orgLogo} alt={orgName} title={orgName} loading="lazy"/>
                        </div>
                    </div>
                </div>
                <div className={s.content}>
                    <div className={s.wrapper}>
                        <div className={s.rate}>
                            {rateFrom}%
                        </div>
                    </div>
                </div>
                <div className={s.content}>
                    <div className={s.wrapper}>
                        <div className={s.creditAmount}>
                            <span>От {creditAmountFrom} ₽ {creditAmountTo ? `до ${creditAmountTo} ₽` : ''}</span> 
                        </div>
                    </div>
                </div>
                <div className={s.content}>
                    <div className={s.wrapper}>
                        <div className={s.age}>
                            <span>Возраст от {age} {(age.toString().length - 1) === (age.toString().lastIndexOf('1')) ? 'года' : 'лет' }</span>
                            <br />
                            <span>{docAmount} документа</span>
                        </div>
                    </div>
                </div>
                <div className={s.content}>
                    <div className={s.wrapper}>
                        <div className={s.licNum}>
                            лиц. № {licNum}
                        </div>
                        <Link to={`/Details/${id}`} style={{ textDecoration: 'none' }}><div onClick={() =>  dispatch(getProduct(id))} className={s.details}>Подробнее</div></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductRow;