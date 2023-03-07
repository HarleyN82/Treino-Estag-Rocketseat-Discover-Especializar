import React, {useState, useEffect} from 'react';
import './styles.css'

// Importanto Componentes

import { Card } from '../../components/Card'

export function Home() {

  const [studentName, setStudentName] = useState();
  const [students, setStudent] = useState([]); 
  const [isAddingStudent, setIsAddingStudent] = useState(false);
  const [user, setUser] = useState({name:'', avatar:''})

  useEffect(() => {
    const savedData = localStorage.getItem('students');
    if (savedData) {
      setStudent(JSON.parse(savedData));
    }
  }, []);

  function handleAddStudent(){

    if (!studentName.trim()) {
      // Impedir adição de card quando o input está vazio
      alert('Please enter a student name')
      return;
    }
  
    if(isAddingStudent) return;
    setIsAddingStudent(true);

    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("en",{
        hour: '2-digit',
        minute: '2-digit', 
        second: '2-digit'
      })
    };

    setStudent(prevState => [...prevState, newStudent]);

    setTimeout(() => {
      console.log('You just can add student after 1s in each card')
      setStudent([...students, newStudent]);
      localStorage.setItem('students', JSON.stringify([...students, newStudent]));
      setStudentName(''); // Limpar o input
      setIsAddingStudent(false);
    }, 1000);
  };

  const handleDelete = (index) => {
    const newCards = [...students];
    newCards.splice(index, 1);
    setStudent(newCards);
    localStorage.setItem('students', JSON.stringify(newCards));
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/samarasilvia21')
      const data = await response.json();
      console.log("DATAS: ", data);
      setUser({
        name: data.name,
        avatar: data.avatar_url,
    });
  }
  fetchData();
  },[]);

  return (
  <div className='container'>

    <header>
      <h1>Presence List</h1>
      <div>
        <strong>{user.name}</strong>
        <img src={user.avatar} alt="Profile Github" />
      </div>
    </header>
    
    <input 
      type="text" 
      value={studentName}
      placeholder="Type your name..."
      onChange={e => setStudentName(e.target.value)} 
    />

    <button type="button" id="btnAdd" onClick={handleAddStudent}>
      ADD
    </button>

    {
      students.map((student,index) => (
        <Card 
          key={student.time}
          name={student.name} 
          time={student.time}
          index={index}
          onDelete={handleDelete}
        />)
      )
    }
  </div>
  )
}