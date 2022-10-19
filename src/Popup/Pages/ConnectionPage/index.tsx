import { ipData } from '../../../types'
import Page from '../../Components/Page'
import Table from '../../Components/Table'
import TableRow from '../../Components/TableRow'

interface ConnectionPageProps {
  tab: string
  ipData?: ipData
}

const ConnectionPage = ({ tab, ipData }: ConnectionPageProps) => {
  // let options: any

  // function success(pos: any) {
  //   var crd = pos.coords
  //   console.log('Your connection position is:')
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
    <Page isCurrentTab={tab === 'connection'} title={'Connection Info'}>
      <Table>
        <TableRow title="IP Address" value={ipData?.query} />
        <TableRow title="Country" value={ipData?.country} />
        <TableRow title="Region" value={ipData?.regionName} />
        <TableRow title="City" value={ipData?.city} />
        <TableRow title="Latitude" value={`${ipData?.lat}`} />
        <TableRow title="Longitude" value={`${ipData?.lon}`} />
        <TableRow title="ISP" value={ipData?.isp} />
        <TableRow title="Organization" value={ipData?.org} />
        <TableRow
          title="Proxy/VPN"
          value={ipData?.proxy ? 'True' : 'False'}
          noBorder
        />
      </Table>
    </Page>
  )
}

export default ConnectionPage
