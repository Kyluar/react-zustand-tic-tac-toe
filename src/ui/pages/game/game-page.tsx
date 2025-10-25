import Status from '@/ui/components/status/Status'
import Board from '@/ui/components/board/Board'

export default function GamePage() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center h-100'>
      <Status />
      <Board />
    </div>
  )
}
