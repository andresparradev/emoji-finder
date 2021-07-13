import { useEffect, useState } from 'react'
import './App.css'
import Search from './components/search'
import ListEmojis from './components/list-emojis'
import { getAllEmojis } from './services/emojis'

function App () {
  const [emojis, setEmojis] = useState([])

  useEffect(() => {
    handleGetEmojis()
  }, [])

  const handleGetEmojis = async () => {
    const res = await getAllEmojis()
    setEmojis(res)
  }

  return (
    <div className="App">
      <Search />
      <ListEmojis emojis={emojis} />
    </div>
  )
}

export default App
