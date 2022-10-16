import { useState, useEffect } from 'react'

import Page from '../../Components/Page'
import CheckBox from '../../Components/CheckBox'
import { ipData } from '../../../types'
import Table from '../../Components/Table'
import TableRow from '../../Components/TableRow'

interface AutofillPageProps {
  tab: string
  ipData?: ipData
  reverseGeocoding: any
}

const AutofillPage = ({ tab, ipData, reverseGeocoding }: AutofillPageProps) => {
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [region, setRegion] = useState('')
  const [postCode, setPostCode] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState(
    'fjkdskf fdkfksj 324324kk dj3223j4k3l jerwkjjekjjwrjrhwehrwjejhwreherwjrwhje'
  )
  // const [configuration, setConfiguration] = useState('default')

  useEffect(() => {
    // chrome.storage.local.get(['configuration', 'ipData'], (storage) => {
    //   storage.configuration && setConfiguration(storage.configuration)
    //   if (storage.ipData) {
    //     setIP(storage.ipData)
    //   } else {
    //     Promise.resolve(getIP()).then((ipData) => setIP(ipData))
    //   }
    // })
    if (ipData?.country) {
      setCountry(ipData.country)
      chrome.storage.local.set({
        country: ipData.country,
      })
    }
    if (ipData?.city) {
      setCity(ipData.city)
      chrome.storage.local.set({
        city: ipData.city,
      })
    }
    if (ipData?.regionName) {
      setRegion(ipData.regionName)
      chrome.storage.local.set({
        region: ipData.regionName,
      })
    }
    if (ipData?.zip) {
      setPostCode(ipData.zip)
      chrome.storage.local.set({
        postCode: ipData.zip,
      })
    }
    // ipData?.city && setCity(ipData.city)
    // ipData?.regionName && setRegion(ipData.regionName)
    // ipData?.zip && setPostCode()
    // chrome.storage.local.set({
    //   country: ipData.country,
    //   city: ipData.city,
    //   regionName: ipData.regionName,
    //   zip: ipData.zip,
    // })
  }, [ipData, setCity, setPostCode, setRegion])

  useEffect(() => {
    if (!postCode && reverseGeocoding?.postcode) {
      setPostCode(reverseGeocoding?.postcode)
      chrome.storage.local.set({
        postCode: reverseGeocoding?.postcode,
      })
    }
    if (reverseGeocoding?.house_number && reverseGeocoding?.road) {
      setAddress(`${reverseGeocoding.house_number} ${reverseGeocoding.road}`)
      chrome.storage.local.set({
        address: `${reverseGeocoding.house_number} ${reverseGeocoding.road}`,
      })
    } else if (reverseGeocoding?.road) {
      setAddress(reverseGeocoding.road)
      chrome.storage.local.set({
        address: reverseGeocoding.road,
      })
    }
  }, [postCode, reverseGeocoding, setAddress])

  // const changeUserAgent = () => {
  //   // if (userAgentType !== 'custom') {
  //   //   setUserAgentType('custom')
  //   //   chrome.storage.local.set({
  //   //     userAgentType: 'custom',
  //   //   })
  //   // }
  // }

  return (
    <Page isCurrentTab={tab === 'autofill'} title={'Autofill'}>
      <CheckBox title={'Disable Built-In Address Autofill'} />
      <CheckBox title={'Automatically Autofill'} />
      <Table title="Autofill Data">
        <TableRow title="Country" value={country} />
        <TableRow title="Region" value={region} />
        <TableRow title="City" value={city} />
        <TableRow title="Postal Code" value={postCode} />
        <TableRow title="Address" value={address} />
        <TableRow title="Phone" value={phone} noBorder />
      </Table>
    </Page>
  )
}

export default AutofillPage
