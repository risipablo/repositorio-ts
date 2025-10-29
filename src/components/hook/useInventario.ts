import { useState } from "react"
import { IProductoIventario } from "../interface/interface"


export const useInvetario = (products: IProductoIventario[] ) => {
    const [productFilter, setProductFilter] = useState<IProductoIventario[]>(products)
    
    const sumStock = ():number => {
        return productFilter.reduce((acc,tol) => acc + tol.stock, 0)
    }

    const sumInven = ():number => {
        return productFilter.reduce((acc,tol) => acc + (tol.stock * tol.precio), 0)
    }




    return{
        sumStock,
        sumInven,
        productFilter,
        setProductFilter
    }
}