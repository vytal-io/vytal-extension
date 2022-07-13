import React from 'react'
import HomePage from './HomePage'
import LocationPage from './LocationPage'
import UserAgentPage from './UserAgentPage'

interface PageProps {
  tab: number
}

const Page = ({ tab }: PageProps) => {
  switch (tab) {
    case 0:
      return <HomePage />
    case 1:
      return <LocationPage />
    case 2:
      return <UserAgentPage />
    case 3:
      return <HomePage />
    case 4:
      return <HomePage />
    default:
      return <HomePage />
  }
}

export default Page
