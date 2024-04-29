import { useState } from 'react'

function App() {
  const [tarefas, setTarefa] = useState<Array<string> | []>([])
  const [novoItem, setNovoItem] = useState('')

  function pegarItem(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setTarefa([...tarefas, novoItem])
    setNovoItem('')
  }

  console.log(novoItem)
  return (
    <>
      <h1>Teste input</h1>
      <div>
        <ul>
          {tarefas.map((tarefa) => (
            <li>
              <p>{tarefa}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <form
          onSubmit={(event) => {
            pegarItem(event)
          }}
        >
          <input
            type="text"
            placeholder="Digite uma atividade"
            value={novoItem}
            onChange={(event) => {
              setNovoItem(event.target.value)
            }}
          />
          <button type="submit">Adicionar</button>
        </form>
      </div>
    </>
  )
}

export default App
