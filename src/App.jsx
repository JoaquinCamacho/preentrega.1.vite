
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'



function App() {
  

  return (
  <div>

    <NavBar />
    <ItemListContainer  saludo = {"Este es el primer ItemListContainer"}/>
    <ItemListContainer  saludo = {"Este es el segundo ItemListContainer"}/>
    <ItemListContainer  saludo = {"Este es el tercero ItemListContainer"}/>
    
  </div>
    
    
  )
}

export default App
