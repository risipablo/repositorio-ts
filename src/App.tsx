


import { Calculator } from "./components/Calculator & Count/CalculatorNumber"
import { Counter } from "./components/Calculator & Count/Counter"
import { Numbers } from "./components/Exercise/Numbers"
import { TODOLIST } from "./components/Todo/ToDoList"
import { DataLocal } from "./components/User/UserApi"
import { Banco } from "./pages/Banco"
import { InventarioPage } from "./pages/InventarioPage"




function App() {
  

  return (
    <>
      <Counter/>
      <Calculator/>
      <Numbers/>
      <TODOLIST/>
      <DataLocal/>
      <Banco/>
      <InventarioPage/>
    </>
  )
}

export default App
