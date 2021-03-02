import Container from '@/components/atoms/Container'
import RichText from '@/components/atoms/RichText'
import { signOut, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

/**
 * Profile Component
 */
export default function Profile() {
  const [session, loading] = useSession()
  const router = useRouter()

  // @TODO - Possibly create a model for User.
  let user = {
    firstName: '',
    lastName: '',
    email: '',
    username: ''
  }

  useEffect(() => {
    if (!(session || loading)) {
      router.push('/login')
    }
  })

  // Prevent unauth flash
  if (!session) {
    return null
  }

  if (session?.user) {
    user = session.user
  }

  return (
    <Container>
        <RichText tag="h1">Profile</RichText>
        {loading ? (
          <p>Loading</p>
        ) : (
          <>
            <p>Name: {`${user.firstName} ${user.lastName}`}</p>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
            <p>
              <button onClick={() => signOut()}>Sign out</button>
            </p>
          </>
        )}
      </Container>
  )
}
