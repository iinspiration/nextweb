export function formatDateTime(datetime) {
  const convertLocalDate = new Date(datetime).toLocaleDateString()
  const convertLocalTime = new Date(datetime).toLocaleTimeString()

  return `${convertLocalDate} ${convertLocalTime}`
}

export function formatDate(datetime) {
  const convertLocalDate = new Date(datetime).toLocaleDateString()

  return `${convertLocalDate}`
}
