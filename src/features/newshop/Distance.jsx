import React, { useState, useEffect } from 'react';
import OpenCageGeocoder from 'opencage-api-client';


const MyComponent = () => {
  const [distance, setDistance] = useState(null);
  const apiKey = 'AIzaSyBrdpKCFrR1oMxYds0rkd80BWkhzREXmSY'; // Replace with your actual OpenCage API key

  useEffect(() => {
    const placeId1 = 'ChIJyR28tX8LThAREWcf1V_RtTE'; // New York City
    const placeId2 = 'ChIJq8tLL2Y5E4AR4kxyWmfzC_Y'; // London

    // Create OpenCageGeocoder instance
    const geocoder = new OpenCageGeocoder(apiKey);

    // Fetch coordinates for each place_id
    Promise.all([
        geocoder.forwardGeocode({ q: placeId1 }),
        geocoder.forwardGeocode({ q: placeId2 }),
      ])
      .then(([response1, response2]) => {
        const lat1 = response1.results[0].geometry.lat;
        const lon1 = response1.results[0].geometry.lng;
        const lat2 = response2.results[0].geometry.lat;
        const lon2 = response2.results[0].geometry.lng;

        // Calculate the distance using your preferred function (e.g., the one from a previous response)
        const distance = calculateDistance(lat1, lon1, lat2, lon2);
        setDistance(distance);
      })
      .catch(error => console.error('Error fetching coordinates:', error));
  }, []);

  return (
    <div>
      {distance !== null && (
        <p>The distance between New York City and London is approximately {distance.toFixed(2)} kilometers.</p>
      )}
    </div>
  );
};

export default MyComponent;
