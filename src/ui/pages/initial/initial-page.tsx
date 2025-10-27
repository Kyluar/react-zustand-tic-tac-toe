import Link from 'next/link'

export default function InitialPage() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center h-100'>
      <span className='h5 align-self-start justify'>Tic Tac Toe</span>
      <Link href={'/play'} className='btn btn-success my-auto'>
        Play
      </Link>
    </div>
  )
}
