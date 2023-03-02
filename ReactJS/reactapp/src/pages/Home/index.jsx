import './styles.css'

// Importanto Componentes

import { Card } from '../../components/Card'

export function Home() {

  return (
   <div className='container'>
     <h1>Lista de Presença</h1>
      <input type="text" placeholder="Digite o nome..."/>
      <button type="button">Adicionar</button>
      <Card name="Thomas" time="10:55:25"/>
      <Card name="Emma" time="11:00:10"/>
      <Card name="Matheus" time="11:30:25"/>
      <Card name="Scarlet" time="12:15:35"/>
   </div>
  )
}