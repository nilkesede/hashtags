import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'

const withAuthCheck = Component => props => {
  const {user} = props
  const router = useRouter()
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (user && router.pathname === '/login') {
      router.push('/')
      return
    }

    if (!user && router.pathname !== '/login') {
      router.push('/login')
      return
    }

    setShow(true)
  }, [user, router, setShow])

  return show ? <Component {...props}/> : <div/>
}

export default withAuthCheck
