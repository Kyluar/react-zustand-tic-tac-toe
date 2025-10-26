'use client'

import { GameState, Player } from '@/lib/types/store'

type StatusProps = {
  status: GameState['status']
  player: Player
}

export default function Status(props: StatusProps) {
  return (
    <div className='d-flex align-self-start gap-5'>
      {Object.entries(props).map(([k, v], idx) => (
        <span key={k + idx} className='text-capitalize'>
          <b>{k}: </b> {v}
        </span>
      ))}
    </div>
  )
}
