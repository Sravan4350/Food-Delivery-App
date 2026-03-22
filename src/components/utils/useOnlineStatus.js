import { useEffect, useState } from "react"

const useOnlineStatus = () => {

  const [userStatus, setUserStatus] = useState(true)

  useEffect(() => {

    const handleOnline = () => setUserStatus(true)
    const handleOffline = () => setUserStatus(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
    
    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])
  return userStatus
}
export default useOnlineStatus