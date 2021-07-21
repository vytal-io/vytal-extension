import { useState, useEffect } from 'react';
import ScanBlock from './ScanBlock';
import Table from './Table';

const LocationBlock = () => {
  const [locationData, setLocationData] = useState('');

  useEffect(() => {
    fetch('http://ip-api.com/json')
      .then((response) => response.json())
      .then((data) => {
        setLocationData(data);
      });
  }, []);

  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${locationData.lat},${locationData.lon}&markers=color:red%7Clabel:%7C${locationData.lat},${locationData.lon}&size=500x200&zoom=10&key=AIzaSyB-YN-X8PGBSPd7NOaQu4csVhgJUnF3ZGk`;

  const data = [
    {
      key: 'country',
      title: 'Country',
      value: locationData.country,
    },
    {
      key: 'regionName',
      title: 'Region',
      value: locationData.regionName,
    },
    {
      key: 'lat',
      title: 'City',
      value: locationData.city,
    },
    {
      key: 'zip',
      title: 'Zip code',
      value: locationData.zip,
    },
    {
      key: 'lat',
      title: 'Latitude',
      value: locationData.lat,
    },
    {
      key: 'lon',
      title: 'Longitude',
      value: locationData.lon,
    },
  ];

  return (
    <ScanBlock>
      <h1>Location</h1>
      <img src={mapUrl} alt="Map of current location" />
      <Table data={data} />
      <p>
        <b>Explanation:</b> JavaScript can be used to read various information
        about your software. This information can be used to create a
        fingerprint.
      </p>
    </ScanBlock>
  );
};

export default LocationBlock;
