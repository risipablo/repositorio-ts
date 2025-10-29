
import { useInvetario } from "../hook/useInventario.ts"
import {data} from "../data/product.ts"
import { Filter } from "../common/filter.tsx"
import { useCarrito } from "../hook/useCarrito.ts"
import { Carrito } from "../../pages/carrito.tsx"

export const Inventario = () => {
    const {sumStock, sumInven, productFilter, setProductFilter} = useInvetario(data)
    const{carrito,actualizarCantidad,agregarAlCarrito,eliminarDelCarrito,vaciarCarrito} = useCarrito()
    const totalStock = sumStock()
    const totalInven = sumInven()
    
    

    return(
        <div>
            <div>
                <button onClick={() => setProductFilter(data)}> Mostar todos</button>
                
                <Filter products={data} setProductFilter={setProductFilter}/>
            
            </div>

             <div style={{ display: 'grid', gap: '15px' }}>
                    {productFilter.map((item) => (
                        <div key={item.id} style={{
                            border: '1px solid #ddd',
                            padding: '15px',
                            borderRadius: '8px',
                           
                        }}>
                            <h3 style={{ margin: '0 0 10px 0' }}>{item.nombre}</h3>
                            <p><strong>Precio:</strong> ${item.precio}</p>
                            <p><strong>Stock:</strong> {item.stock}</p>
                            <p><strong>Categoría:</strong> {item.categoria}</p>
                            
                            <button
                                onClick={() => agregarAlCarrito(item)}
                                disabled={item.stock === 0}
                                style={{
                                    padding: '8px 15px',
                                    background: item.stock === 0 ? '#ccc' : '#228be6',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: item.stock === 0 ? 'not-allowed' : 'pointer'
                                }}
                            >
                                {item.stock === 0 ? 'Sin Stock' : '🛒 Agregar al Carrito'}
                            </button>
                            
                            {item.stock > 0 && item.stock < 3 && (
                                <p style={{ color: '#e67700', margin: '5px 0 0 0', fontSize: '0.9em' }}>
                                    ⚠️ Últimas unidades
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                
                <div style={{ marginTop: '20px', padding: '15px', background: '#000000ff' }}>
                    <p><strong>Total de stock:</strong> {totalStock}</p>
                    <p><strong>Valor total del inventario:</strong> ${totalInven}</p>
                </div>


                <div>
                    <Carrito
                    carrito={carrito}
                    eliminarDelCarrito={eliminarDelCarrito}
                    actualizarCantidad={actualizarCantidad}
                    vaciarCarrito={vaciarCarrito}
                    />
                </div>

            </div>

    )
}