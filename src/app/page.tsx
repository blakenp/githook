'use client'

import Image from 'next/image'

export default function Home() {

  const sendPostRequest = async () => {
    const response = await fetch(`/api/webhook`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    console.log(data)
  }

  return (
    <div>
      <button onClick={sendPostRequest}>Send POST Request</button>
    </div>
  )
}
