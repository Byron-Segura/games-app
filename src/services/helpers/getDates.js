export function getDates () {
  const now = new Date()

  const currentDay = now.getDate()
  const currentMonth = now.getMonth() + 1
  const currentYear = now.getFullYear()

  const currentDate = currentYear + '-' + currentMonth + '-' + currentDay
  const lastMonthDate = currentYear + '-' + (currentMonth - 1) + '-' + currentDay
  const nextYearDate = (currentYear + 1) + '-' + currentMonth + '-' + currentDay

  return { currentDate, lastMonthDate, nextYearDate }
}
