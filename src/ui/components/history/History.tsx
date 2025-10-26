import { GameState } from '@/lib/types/store'

type HistoryProps = {
  history: GameState['history']
  handleOnClick: (idx: number) => void
}

export default function History({ history, handleOnClick }: HistoryProps) {
  return (
    <div>
      <ol>
        {history.map((_, historyIndex) => {
          const description =
            historyIndex > 0
              ? `Go to move #${historyIndex}`
              : 'Go to game start'

          return (
            <li key={historyIndex}>
              <button onClick={() => handleOnClick(historyIndex)}>
                {description}
              </button>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
