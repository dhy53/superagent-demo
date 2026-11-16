export function greeting(hour) {
  if (hour < 13) return 'Good morning'
  if (hour < 18) return 'Good afternoon'
  return 'Good evening'
}
