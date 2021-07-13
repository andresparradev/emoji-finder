import Emoji from '../emoji'
import './index.css'

function ListEmojis ({ emojis }) {
  return (
    <div className="ListEmojis">
      {emojis.map(emoji => {
        return <Emoji {...emoji} />
      })}
    </div>
  )
}

export default ListEmojis
