interface truncateStringProps {
  string: string
  limit: number
}

export const truncateString = ({ string, limit }: truncateStringProps): string => {
  return string.length > limit ? string.slice(0, limit - 1) + '...' : string
}
