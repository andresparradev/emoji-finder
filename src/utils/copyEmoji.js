export default async function copyEmoji (emoji) {
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(emoji)
    return 'Copied'
  }
}
