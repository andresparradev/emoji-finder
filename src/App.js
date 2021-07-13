import './App.css'
import { useEffect } from 'react'
import { getAllEmojis } from './services/emojis'

function App () {
  useEffect(() => {
    handleGetEmojis()
  }, [])

  const handleGetEmojis = async () => {
    const emojis = await getAllEmojis()
    console.log(emojis)
  }

  return (
    <h1>Hello</h1>
  )
}

export default App
