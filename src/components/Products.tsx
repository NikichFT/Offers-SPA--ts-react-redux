import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import {getProducts} from '../store/action-creators/products'
import ProductRow from './ProductRow'
import s from './Products.module.css'

const Products: React.FC = () => {
    const { products } = useTypedSelector(state => state.products)
    const {filteredProducts} = useTypedSelector(state => state.filteredProducts)
    const {searchValue} = useTypedSelector(state => state.search)
    const {pageNum, fetching} = useTypedSelector(state => state.pageOperations)
    const dispatch = useDispatch()

    useEffect(()=>{
        if (fetching) dispatch(getProducts(pageNum))
    }, [fetching])


    return (
        <div className={s.products}>
            {filteredProducts.length > 0 && searchValue ? filteredProducts.map((product) => 
            <ProductRow key={product.id} 
                name={product.name} 
                id={product.id}
                orgName={product.organization.name}
                orgLogo={product.organization.logo}
                rateFrom={product.rate.periods[0].rate.from}
                creditAmountFrom={product.rate.creditAmount.from}
                creditAmountTo={product.rate.creditAmount.to}
                age={product.customerRequirements.age}
                docAmount={product.customerRequirements.documents}
                licNum={product.organization.license}
            />) :
            products.map((product) => 
            <ProductRow key={product.id} 
                name={product.name} 
                id={product.id}
                orgName={product.organization.name}
                orgLogo={product.organization.logo}
                rateFrom={product.rate.periods[0].rate.from}
                creditAmountFrom={product.rate.creditAmount.from}
                creditAmountTo={product.rate.creditAmount.to}
                age={product.customerRequirements.age}
                docAmount={product.customerRequirements.documents}
                licNum={product.organization.license}
            />)}
        </div>
    )
}

export default Products;