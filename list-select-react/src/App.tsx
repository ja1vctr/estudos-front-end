import { useEffect, useState } from 'react'

interface IRaca {
  nome: string
}

function App() {
  const [racas, setRacas] = useState<Array<IRaca>>([])
  const [busca, setBusca] = useState<string>('')

  useEffect(() => {
    fetch('http://localhost:8080/doguinhos').then((resposta) =>
      resposta.json().then((dados) => {
        setRacas(dados)
      })
    )
  }, [])

  useEffect(() => {
    if (busca !== '') {
      fetch('http://localhost:8080/doguinhos?nome=' + busca).then((resposta) =>
        resposta.json().then((dados) => {
          setRacas(dados)
        })
      )
    }
  }, [busca])

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
        {racas.map((raca) => (
          <li key={raca.nome}>{raca.nome}</li>
        ))}
      </ul>
    </>
  )
}

export default App
