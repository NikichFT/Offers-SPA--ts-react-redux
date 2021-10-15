import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import {getProduct} from '../store/action-creators/productAction'
import s from './Details.module.css'
import '../css-utils/loader.css'

import Info from './Info'

const Details: React.FC = (props: any) => {
    const {product, loading, error} = useTypedSelector(state => state.product)
    const dispatch = useDispatch()
    const productId: string = props.match.params.id

    useEffect(()=>{
        dispatch(getProduct(productId))
    }, [])

    return(
        <div className={s.container}>
            <Link to={"/"}><button title="Back" className={s.back}></button></Link>
            {loading && <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
            {product.name && <div className={s.wrapper}>
                <div className={s.head}>{product.name}</div>
                <Info 
                name={product.name} 
                id={product.id}
                orgName={product.organization?.name}
                orgLogo={product.organization?.logo}
                rateFrom={product.rate?.periods[0].rate.from}
                creditAmountFrom={product.rate?.creditAmount.from}
                creditAmountTo={product.rate?.creditAmount.to}
                age={product.customerRequirements?.age}
                docAmount={product.customerRequirements?.documents}
                licNum={product.organization?.license}
                />
            </div>}
        </div>
    )
}

export default Details;