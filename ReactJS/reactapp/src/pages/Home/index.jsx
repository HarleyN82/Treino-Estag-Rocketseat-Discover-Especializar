import React, {useState} from 'react';
import './styles.css'

// Importanto Componentes

import { Card } from '../../components/Card'

export function Home() {

  const [studentName, setStudentName] = useState();

  return (
   <div className='container'>
     <h1>Nome: {studentName} </h1>
      <input 
        type="text" 
        placeholder="Digite o nome..."
        onChange={e => setStudentName(e.target.value)} // Acessaremos o valor de dentro do input
      />
      <button type="button">Adicionar</button>
      <Card name="Thomas" time="10:55:25"/>
      <Card name="Emma" time="11:00:10"/>
      <Card name="Matheus" time="11:30:25"/>
      <Card name="Scarlet" time="12:15:35"/>
   </div>
  )
}