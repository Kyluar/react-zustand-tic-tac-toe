'use client'

import { useGameStore } from '@/lib/store'

export default function Status() {
  const status = useGameStore((state) => state.status)
  const player = useGameStore((state) => state.player)

  const panel = {
    status,
    player,
  }
  return (
    <div className='d-flex align-self-start gap-5'>
      {Object.entries(panel).map(([k, v], idx) => (
        <span key={k + idx}>
          <b>{k.at(0)!.toUpperCase() + k.slice(1)}: </b> {v}
        </span>
      ))}
    </div>
  )
}
