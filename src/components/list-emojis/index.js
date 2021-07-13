import Emoji from '../emoji'
import './index.css'

function ListEmojis ({ emojis }) {
  return (
    <div className="ListEmojis">
      {emojis.map(emoji => {
        return <Emoji key={emoji.slug} slug={emoji.slug} character={emoji.character} name={emoji.unicodeName} />
      })}
    </div>
  )
}

export default ListEmojis
