'use client'

import { GameStatus, Player } from '@/lib/types/store'

type StatusProps = {
  status: GameStatus
  player: Player
}

export default function Status({ status, player }: StatusProps) {
  const panel = {
    status,
    player,
  }
  return (
    <div className='d-flex align-self-start gap-5'>
      {Object.entries(panel).map(([k, v], idx) => (
        <span key={k + idx} className='text-capitalize'>
          <b>{k}: </b> {v}
        </span>
      ))}
    </div>
  )
}
