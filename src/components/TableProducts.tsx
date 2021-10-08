import React from "react"
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { pageFetching } from "../store/action-creators/pageAction";
import { sortCostAction, sortRateAction } from "../store/action-creators/sortAction";
import Products from "./Products";
import s from './TableProducts.module.css'

const TableProducts: React.FC = () => {
    const dispatch = useDispatch()
    const {loading} = useTypedSelector(state => state.products)
    const {filteredProducts} = useTypedSelector(state => state.filteredProducts)
    const {pageNum} = useTypedSelector(state => state.pageOperations)

    return(
        <div className={s.container}>
            <div className={s.table}>
                { !filteredProducts.length && <div className={s.sort_bar}>
                    <span>Сортировать:</span>
                    <div className={s.options}>
                        <div onClick={()=> dispatch(sortRateAction())} className={s.option}>
                            <span>По ставке</span>
                            <div className={s.triangle}></div>
                        </div>
                        <div onClick={()=> dispatch(sortCostAction())} className={s.option}>
                            <span>По сумме</span> 
                            <div className={s.triangle}></div>
                        </div>
                    </div>
                </div>}
                <Products/>
                {loading || filteredProducts.length ? <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> :
                <div className={s.button_area} style={{display: `${ pageNum > 5 ? 'none' : 'flex'}`}}>
                    <button onClick={()=> dispatch(pageFetching(true))} className={s.moreButton}>Get more</button>
                </div>}
            </div>
        </div>
    )
}

export default TableProducts;