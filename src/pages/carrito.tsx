import React from "react"
import { ICarritoItem } from "../components/interface/interface"

interface CarritoProps{
    carrito: {
        items: ICarritoItem[]
        total:number
        cantidadTotal:number
    }
    eliminarDelCarrito: (productoId:number) => void
    actualizarCantidad: (productoId:number, cantidad:number) => void
    vaciarCarrito:() => void
}

export const Carrito: React.FC<CarritoProps> = ({
    carrito,
    eliminarDelCarrito,
    actualizarCantidad,
    vaciarCarrito
}) => {
    if(carrito.items.length === 0){
        return(
            <div style={{
                border: '2px dashed #ccc',
                padding: '20px',
                textAlign: 'center',
                margin: '20px 0'
            }}>
                <h3>🛒 Carrito de Compras</h3>
                <p>Tu carrito está vacío</p>
            </div>
        )
    }


    return (
        <div style={{
            border: '1px solid #007acc',
            padding: '20px',
            margin: '20px 0',
            backgroundColor: '#000000ff'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3>🛒 Carrito de Compras ({carrito.cantidadTotal} items)</h3>
                <button 
                    onClick={vaciarCarrito}
                    style={{
                        padding: '5px 10px',
                        background: '#ff4444',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px'
                    }}
                >
                    Vaciar Carrito
                </button>
            </div>

            {carrito.items.map(item => (
                <div key={item.producto.id} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px',
                    borderBottom: '1px solid #eee',
                    marginBottom: '10px'
                }}>
                    <div style={{ flex: 2 }}>
                        <h4 style={{ margin: 0 }}>{item.producto.nombre}</h4>
                        <p style={{ margin: 0, color: '#666' }}>
                            ${item.producto.precio} x {item.cantidad} = 
                            <strong> ${item.producto.precio * item.cantidad}</strong>
                        </p>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <button
                            onClick={() => actualizarCantidad(Number(item.producto.id), item.cantidad - 1)}
                            style={{
                                padding: '5px 10px',
                                background: '#ff6b6b',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px'
                            }}
                        >
                            -
                        </button>
                        
                        <span style={{ minWidth: '30px', textAlign: 'center' }}>
                            {item.cantidad}
                        </span>
                        
                        <button
                            onClick={() => actualizarCantidad(Number(item.producto.id), item.cantidad + 1)}
                            style={{
                                padding: '5px 10px',
                                background: '#51cf66',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px'
                            }}
                        >
                            +
                        </button>
                        
                        <button
                            onClick={() => eliminarDelCarrito(Number(item.producto.id))}
                            style={{
                                padding: '5px 10px',
                                background: '#ff8787',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                marginLeft: '10px'
                            }}
                        >
                            🗑️
                        </button>
                    </div>
                </div>
            ))}

            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '15px',
                backgroundColor: '#050505ff',
                borderRadius: '5px',
                marginTop: '15px'
            }}>
                <h3 style={{ margin: 0 }}>Total:</h3>
                <h3 style={{ margin: 0 }}>${carrito.total.toFixed(2)}</h3>
            </div>

            <button
                style={{
                    width: '100%',
                    padding: '15px',
                    background: '#40c057',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    fontSize: '16px',
                    marginTop: '15px',
                    cursor: 'pointer'
                }}
                onClick={() => alert(`¡Compra realizada por $${carrito.total.toFixed(2)}!`)}
            >
                🎉 Finalizar Compra
            </button>
        </div>
    );
}