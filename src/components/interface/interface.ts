

export interface ITask{
    id?:number
    text: string
    date: string
    done?:boolean
}

export interface IUsers{
    id?:number,
    name:string
    email: string
    age: number
    city:string
}

export interface Ifetch{
  id?: number;
  name: string;
  email: string;
  username: string;
  address: {
    city: string;
  };
}


export interface IClient{
  name:string,
  lastname:string
  print?(): string
}


export interface IProductoIventario{
  id?:number,
  nombre:string,
  precio: number,
  stock: number,
  categoria: 'electronica' | 'ropa' | 'hogar' | 'deportes'
}


export interface ICarritoItem{
  producto: IProductoIventario;
  cantidad: number;
}




export interface ICarrito{
  items: ICarritoItem[]
  total: number
  cantidadTotal: number
}
