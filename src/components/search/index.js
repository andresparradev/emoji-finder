import './index.css'
import { useState } from 'react'

function Search () {
  const [emojiName, setEmojiName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(emojiName)
  }

  return (
    <div className="Search">
      <h1 className="Search-title">Emoji Finder</h1>
      <form className="Search-box" onSubmit={handleSubmit}>
        <input
          type="text"
          value={emojiName}
          onChange={e => setEmojiName(e.target.value)}
          placeholder="Search...."
          className="Search-input"
        />
        <button type="submit" className="btn Search-btn">Search</button>
      </form>
    </div>
  )
}

export default Search
