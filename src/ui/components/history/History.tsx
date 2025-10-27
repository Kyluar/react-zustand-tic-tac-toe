import ListGroup from 'react-bootstrap/ListGroup'
import { GameState } from '@/lib/types/store'

import { calculateXIsNext, calculatePlayer } from '@/lib/utils/game'

type HistoryProps = {
  history: GameState['history']
  handleOnClick: (idx: number) => void
  className?: string
}

export default function History({
  history,
  handleOnClick,
  className = '',
}: HistoryProps) {
  const calculatePlayOwner = (i: number) => calculatePlayer(calculateXIsNext(i))

  if (history.length <= 1) return null

  return (
    <ListGroup data-bs-theme='dark' className={className}>
      {history.map((_, historyIndex) => {
        const description =
          historyIndex > 0
            ? `Go to move ${historyIndex} (${calculatePlayOwner(historyIndex - 1)})`
            : 'Go to game start'

        return (
          <ListGroup.Item
            key={historyIndex}
            action
            onClick={() => handleOnClick(historyIndex)}
          >
            {description}
          </ListGroup.Item>
        )
      })}
    </ListGroup>
  )
}
