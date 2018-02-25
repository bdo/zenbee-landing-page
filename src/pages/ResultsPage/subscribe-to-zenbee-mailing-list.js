export default email => {
  const script = document.createElement('script')
  script.src = `https://zenbee.us17.list-manage.com/subscribe/post-json?` +
    `c=?&` +
    `u=0df7166c1d695927640f08947&` +
    `id=3ebfc6599c&` +
    `EMAIL=${encodeURIComponent(email)}`
  document.getElementsByTagName('head')[0].appendChild(script)
}
