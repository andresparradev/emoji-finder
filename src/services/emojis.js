import api from './api'

async function getAllEmojis () {
  const res = await api.get('/emojis')
  return res.data
}

export {
  getAllEmojis
}
