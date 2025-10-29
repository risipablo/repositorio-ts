import { useState } from "react"
import { ICarrito, ICarritoItem, IProductoIventario } from "../interface/interface"



export const useCarrito = () => {
    const [carrito,setCarrito] = useState<ICarrito>({
        items:[],
        total:0,
        cantidadTotal:0
    })

    // Se crea una funcion de suma de productos por la cantidad para evitar la duplicacion de codigo
    const calcularTotales = (items:ICarritoItem[]) => ({
        total: items.reduce((sum,item) => sum + (item.producto.precio * item.cantidad), 0),
        cantidadTotal: items.reduce((sum,item) => sum + item.cantidad, 0)
    })


    const agregarAlCarrito = (producto: IProductoIventario, cantidad:number = 1) => {
        
        setCarrito(prevCarrito =>{ // prevCarrito garantiza trabajar con el estado más reciente 
            

        

            // Busca si el producto ya esta en el carrito
            const itemExistente = prevCarrito.items.find(item =>
                item.producto.id === producto.id
            )

            const cantidadCarrito = itemExistente ? itemExistente.cantidad : 0

            const stockRestante = producto.stock - (cantidadCarrito + cantidad)

            


            const nuevoItems = itemExistente ?  // Si el producto ya exite en el carrito:
            prevCarrito.items.map(item => 
                item.producto.id === producto.id // ¿ Es el producto que queremos actualizar?
                 ? {...item,cantidad: item.cantidad + cantidad} // Si: Suma la cantidad 
                 : item // No: Devuelve el item sim cambios
            )

            // Si el producto no existe en el carrito. Copia todos los items existentes y agrega el nueov al final 
            : [...prevCarrito.items, {producto, cantidad}]

            if (stockRestante < 2) {
                alert(`Advertencia: solo quedarán ${Math.max(stockRestante, 0)} unidades de ${producto.nombre}`)
            }


            // Devuelve en el array de items con los nuevos productos agregados con su cantidad y precio
            return{
                items: nuevoItems,
                ...calcularTotales(nuevoItems) 
                
            }

            
        })
        
    
    }


    const eliminarDelCarrito = (productoId: number) => {
        setCarrito(prev => {
             const itemEliminado = prev.items.filter(item => item.producto.id !== productoId)

             return {
                items:itemEliminado,
                ...calcularTotales(itemEliminado)
             }
        })
    }


    const actualizarCantidad = (productoId: number, nuevaCantidad: number) => {
        if(nuevaCantidad <= 0) {
            eliminarDelCarrito(productoId)
            return
        }

        setCarrito(prev => {
            const nuevoitems = prev.items.map(item => 
                item.producto.id === productoId
                ? {...item, cantidad: nuevaCantidad}
                :item
            )

            return{
                items:nuevoitems,
                ...calcularTotales(nuevoitems)
            }
        })
    }



    const vaciarCarrito = () => {
        setCarrito({
            items: [],
            total: 0,
            cantidadTotal: 0
        })
    }

    return{
        actualizarCantidad,
        agregarAlCarrito,
        eliminarDelCarrito,
        vaciarCarrito,
        carrito
    }

}