


import { Calculator } from "./components/Calculator & Count/CalculatorNumber"
import { Counter } from "./components/Calculator & Count/Counter"
import { TODOLIST } from "./components/Todo/ToDoList"
import { DataLocal } from "./components/User/UserApi"
import { Banco } from "./pages/Banco"
// import { UserPage } from "./pages/UserPage"


function App() {
  

  return (
    <>
      <Counter/>
      <Calculator/>
      <TODOLIST/>
      <DataLocal/>
      {/* <UserPage/> */}
      <Banco/>
    </>
  )
}

export default App
