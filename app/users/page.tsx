'use client'
import Link from 'next/link'

export default function Page() {
  let users = Array.from({ length: 6 }, (_, i) => i + 1)

  return <>
    <h1>Users</h1>

    <section className="cards-container">
      {users.map((id) => (
        <Link className="card" key={id} href={`/users/${id}`} passHref>
          User: {id}
        </Link>
      ))}
    </section>
  </>
}
