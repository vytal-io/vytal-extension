// import { Box } from 'theme-ui'
import Page from '../../Components/Page'

interface CurrentPageProps {
  tab: string
}

const CurrentPage = ({ tab }: CurrentPageProps) => {
  // let options: any

  // function success(pos: any) {
  //   var crd = pos.coords
  //   console.log('Your current position is:')
  //   console.log(`Latitude : ${crd.latitude}`)
  //   console.log(`Longitude: ${crd.longitude}`)
  //   console.log(`More or less ${crd.accuracy} meters.`)
  // }

  // function error(err: any) {
  //   console.error(`ERROR(${err.code}): ${err.message}`)
  // }
  // options = {
  //   enableHighAccuracy: false,
  //   timeout: 5000,
  //   maximumAge: 0,
  // }

  // navigator.geolocation.watchPosition(success, error)

  return (
    <Page isCurrentTab={tab === 'current'} title={'Current Info'}>
      hello
    </Page>
  )
}

export default CurrentPage
