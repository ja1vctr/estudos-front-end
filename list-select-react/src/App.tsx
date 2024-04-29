import { useEffect, useState } from 'react'
import { useFetch } from './hooks/useFetch'

interface IRaca {
  nome: string
}

function App() {
  // const [racas, setRacas] = useState<string>('')
  const [busca, setBusca] = useState<string>('')

  const { data: racas } = useFetch<IRaca[]>('http://localhost:3000/doguinhos')

  return (
    <>
      <h1>Raças de doguinhos!</h1>
      <h4>Veja a lista de raças de doguinhos</h4>
      <input
        type="text"
        placeholder="Busque uma raça de doguinho"
        onChange={(event) => {
          setBusca(event.target.value)
        }}
      />
      <ul>
        {racas?.map((raca) => (
          <li key={raca.nome}>{raca.nome}</li>
        ))}
      </ul>
    </>
  )
}

export default App
