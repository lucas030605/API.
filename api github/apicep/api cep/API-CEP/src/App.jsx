import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);

  const handleBuscaCep = async (event) => {
    try{
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json`);  
      if (!response.ok) {
      throw new Error ('Endereço não encontrado');
      }
      const data = await response.json();
      setEndereco(data);

    }catch(error){
      console.error(error);
    }
  }

  return (
    <>
      <div className='container'>
        <h1>Preencha o Edereço</h1>
        <input
        type="number"
        placeholder='Digite seu CEP'
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        />
        <button
        onClick={handleBuscaCep}>
          Buscar
        </button>
        <div className='endereco'>
          {endereco ? (
            <>
            <p>{JSON.stringify(endereco)}</p>
            </>
          ): null}
        </div>
      </div> 
    </>
  )
 }

export default App
