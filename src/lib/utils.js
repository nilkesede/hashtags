export const sortByIdDesc = (a, b) => {
  if (a.id > b.id) {
    return -1
  }

  if (b.id > a.id) {
    return 1
  }

  return 0
}

export const leftPad = (str, maxLength) =>
  String(str).padStart(maxLength, '0')

export const formatDate = date => {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]

  const hour = date.getHours()
  const minute = date.getMinutes()
  const day = date.getDate()
  const monthIndex = date.getMonth()
  const year = date.getFullYear()

  return `${hour}:${leftPad(minute, 2)} · ${monthNames[monthIndex]} ${day}, ${year}`
}
