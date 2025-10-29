import React, { useEffect, useState } from "react"
import { IProductoIventario } from "../interface/interface"

type Props = {
    products : IProductoIventario[]
    setProductFilter: React.Dispatch<React.SetStateAction<IProductoIventario[]>>
}


export function Filter({ products, setProductFilter }: Props){

    const [categoria,setCategoria] = useState<string>('')
    const [priceMax , setPriceMax] = useState<number | null>(0)
    const [priceMin , setPriceMin] = useState<number | null>(0)
    const [filteredProducts, setFilteredProducts] = useState<IProductoIventario[]>(products)
    

    const filter = () => {
        let filteredProducts = [...products]

        if(categoria.trim() !== ''){
            filteredProducts = filteredProducts.filter(p => p.categoria.toUpperCase().includes(categoria.toUpperCase()))
        }

        if(priceMin !== null && priceMin > 0){
            filteredProducts = filteredProducts.filter(p => p.precio >= priceMin)
        }

        if(priceMax !== null && priceMax > 0){
            filteredProducts = filteredProducts.filter(p => p.precio <= priceMax)
        }


        setProductFilter(filteredProducts)
        setFilteredProducts(filteredProducts)

    }

  

    const maxPrice = () => {
       const maxPrecio = filteredProducts.filter((item) => item.precio === Math.max(...filteredProducts.map(p => p.precio)))
        setProductFilter([...maxPrecio])
        
    }


    const minPrice = () => {
       const maxPrecio = filteredProducts.filter((item) => item.precio === Math.min(...filteredProducts.map(p => p.precio)))
        setProductFilter([...maxPrecio])
        
    }

    

    const cleanFilter = () => {
        setCategoria("")
        setPriceMax(0)
        setPriceMin(0)
        setProductFilter(products)
    }

    useEffect(() => {
        filter()
    },[categoria,priceMax,priceMin])


    return(
        <div>
            <label>
                 Categoria

                <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                    <option value={""}>Todas</option>
                    <option value={"electronica"}>Electronica</option>
                    <option value={"ropa"}>Ropa</option>
                    <option value={"hogar"}>Hogar</option>
                    <option value={"deportes"}>Deportes</option>
                </select>
            </label>

            <div>
                
            <label>
                Desde
                <input type="number" value={priceMin ?? ''} onChange={(e) => setPriceMin(e.target.valueAsNumber)} />

            </label>

            <label>
                Hasta
                <input type="number" value={priceMax ?? ''} onChange={(e) => setPriceMax(e.target.valueAsNumber)} />

            </label>
   

            </div>


            <button onClick={() => minPrice()}> Minimo Precio</button>
            <button onClick={() => maxPrice()}> Maximo Precio</button>
            
            
            <button onClick={cleanFilter}> Clean Filter</button>
        </div>
    )
}