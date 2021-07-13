import './index.css'

function Emoji ({ slug, codePoint, character, group, unicodeName, subgroup }) {
  return (
    <div className="Emoji">
      <span className="Emoji-character">{character}</span>
    </div>
  )
}

export default Emoji
