import axios from 'axios';

  
export const getPlacesData = async (type, bounds) => {
    try {
        const { data: {data} } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
          params: {
            bl_latitude: bounds.sw.lat,
            tr_latitude: bounds.ne.lat,
            bl_longitude: bounds.sw.lng,
            tr_longitude: bounds.ne.lng,
          },
          headers: {
            'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_API_KEY,
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          },
        });
        return data;
    } catch (error) {
        console.log(error)
    }
}


export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
        params: { lat:lat, lon: lng },
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_API_KEY,
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        },
      });

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};


export const getAirQualityData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get('https://air-quality.p.rapidapi.com/current/airquality', {
        params: { lat:lat, lon: lng },
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_API_KEY,
          'x-rapidapi-host': 'air-quality.p.rapidapi.com',
        },
      });

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};