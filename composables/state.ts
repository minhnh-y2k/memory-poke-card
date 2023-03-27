export const useConfig = () => {
  const cols = useState<number>('cols', () => 10)
  const rows = useState<number>('rows', () => 0)
  const timer = useState<number>('timer', () => 0)
  const cards = useState<number[]>('cards', () => [])

  return { cols, rows, timer, cards}
}

// export const useCard = useState<object>('card', () => ({ id: 0, value: 0, flipped: false, matched: false }))