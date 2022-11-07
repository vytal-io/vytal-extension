import { Text } from 'theme-ui'
import { useState, useEffect, ChangeEvent } from 'react'
import Page from '../../Components/Page'
import CheckBox from '../../Components/CheckBox'
// import { autofillData } from '../../../types'
import Table from '../../Components/Table'
import TableRow from '../../Components/TableRow'
import { Button } from 'theme-ui'
import addresses from '../../../utils/addresses'
import FooterLink from '../../Components/FooterLink'
import handleAutofillAddress from './handleAutofillAddress'

interface AutofillPageProps {
  tab: string
  autofillData?: any
  // reverseGeocoding: any
}

const AutofillPage = ({ tab, autofillData }: AutofillPageProps) => {
  const [autofillAddress, setAutofillAddress] = useState(false)
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [region, setRegion] = useState('')
  const [postCode, setPostCode] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('9057814565')
  // const [configuration, setConfiguration] = useState('default')

  useEffect(() => {
    chrome.storage.local.get(['autofillAddress'], (storage) => {
      storage.autofillAddress && setAutofillAddress(storage.autofillAddress)
    })
  }, [])

  useEffect(() => {
    // chrome.storage.local.get(['configuration', 'autofillData'], (storage) => {
    //   storage.configuration && setConfiguration(storage.configuration)
    //   if (storage.autofillData) {
    //     setIP(storage.autofillData)
    //   } else {
    //     Promise.resolve(getIP()).then((autofillData) => setIP(autofillData))
    //   }
    // })
    if (autofillData?.country) {
      setCountry(autofillData.country)
      // chrome.storage.local.set({
      //   country: autofillData.country,
      // })
    }
    if (autofillData?.locality) {
      setCity(autofillData.locality)
      // chrome.storage.local.set({
      //   city: autofillData.city,
      // })
    }
    if (autofillData?.administrative_area_level_1) {
      setRegion(autofillData.administrative_area_level_1)
      // chrome.storage.local.set({
      //   region: autofillData.regionName,
      // })
    }
    if (autofillData?.postal_code) {
      setPostCode(autofillData.postal_code)
      // chrome.storage.local.set({
      //   postCode: autofillData.zip,
      // })
    }
    if (autofillData?.street_number && autofillData?.route) {
      setAddress(`${autofillData.street_number} ${autofillData.route}`)
      // chrome.storage.local.set({
      //   postCode: autofillData.zip,
      // })
    }
    // autofillData?.city && setCity(autofillData.city)
    // autofillData?.regionName && setRegion(autofillData.regionName)
    // autofillData?.zip && setPostCode()
    // chrome.storage.local.set({
    //   country: autofillData.country,
    //   city: autofillData.city,
    //   regionName: autofillData.regionName,
    //   zip: autofillData.zip,
    // })
  }, [autofillData, setCity, setPostCode, setRegion])

  // useEffect(() => {
  //   if (!postCode && reverseGeocoding?.postcode) {
  //     setPostCode(reverseGeocoding?.postcode)
  //     chrome.storage.local.set({
  //       postCode: reverseGeocoding?.postcode,
  //     })
  //   }
  //   if (reverseGeocoding?.house_number && reverseGeocoding?.road) {
  //     setAddress(`${reverseGeocoding.house_number} ${reverseGeocoding.road}`)
  //     chrome.storage.local.set({
  //       address: `${reverseGeocoding.house_number} ${reverseGeocoding.road}`,
  //     })
  //   } else if (reverseGeocoding?.road) {
  //     setAddress(reverseGeocoding.road)
  //     chrome.storage.local.set({
  //       address: reverseGeocoding.road,
  //     })
  //   }
  // }, [postCode, reverseGeocoding, setAddress])

  // const changeUserAgent = () => {
  //   // if (userAgentType !== 'custom') {
  //   //   setUserAgentType('custom')
  //   //   chrome.storage.local.set({
  //   //     userAgentType: 'custom',
  //   //   })
  //   // }
  // }

  const changeCheckBoxValue = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked)
    handleAutofillAddress(e.target.checked)
    setAutofillAddress(e.target.checked)
  }

  return (
    <Page isCurrentTab={tab === 'autofill'} title={'Autofill'}>
      <CheckBox
        title={'Disable Built-In Address Autofill'}
        onChange={changeCheckBoxValue}
        checked={autofillAddress}
      />
      {/* <CheckBox title={'Automatically Autofill'} /> */}
      <Table>
        <TableRow title="Country" value={country} />
        <TableRow title="Region" value={region} />
        <TableRow title="City" value={city} />
        <TableRow title="Postal Code" value={postCode} />
        <TableRow title="Address" value={address} />
        <TableRow title="Phone" value={phone} noBorder />
      </Table>
      <Button
        variant="primary"
        sx={{ borderRadius: '4px' }}
        onClick={() => console.log('click')}
      >
        Autofill Current Page
      </Button>
    </Page>
  )
}

export default AutofillPage
