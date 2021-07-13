import './index.css'
import copyEmoji from '../../utils/copyEmoji'

function Emoji ({ slug, character, name }) {
  const handleCopyEmoji = async () => {
    const res = await copyEmoji(character)
    alert(res)
  }

  return (
    <div className="Emoji" title={name} onClick={handleCopyEmoji}>
      <span className="Emoji-character">{character}</span>
    </div>
  )
}

export default Emoji
