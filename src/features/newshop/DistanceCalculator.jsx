import React, { useState, useEffect } from 'react';

const DistanceCalculator = ({ placeId1, placeId2 }) => {
  const [distance, setDistance] = useState(null);

//   useEffect(() => {
//     const calculateDistance = async () => {
//       try {
//         const response = await fetch(
//           `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=place_id:${placeId1}&destinations=place_id:${placeId2}&key=AIzaSyBrdpKCFrR1oMxYds0rkd80BWkhzREXmSY`
//         );
//         const data = await response.json();

//         // Extract distance from response
//         const distanceInMeters = data.rows[0].elements[0].distance.value;
//         // Convert distance to kilometers
//         const distanceInKilometers = distanceInMeters / 1000;
        
//         setDistance(distanceInKilometers);
//       } catch (error) {
//         console.error('Error calculating distance:', error);
//       }
//     };

//     if (placeId1 && placeId2) {
//       calculateDistance();
//     }
//   }, [placeId1, placeId2]);

  return (
    <div>
      {distance !== null ? (
        <p>The distance between the two locations is {distance.toFixed(2)} kilometers.</p>
      ) : (
        <p>Calculating distance...</p>
      )}
    </div>
  );
};

export default DistanceCalculator;
