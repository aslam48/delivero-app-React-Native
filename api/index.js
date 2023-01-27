import axios from "axios"

export const getPlaceData =  async () => {
    try{
      const {data: {data},} = await axios.get(`https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete`, 
       { params: {query: 'eiffel tower', lang: 'en_US', units: 'km', currency:"USD" },
        headers: {
          'X-RapidAPI-Key': '69a5930a6cmsh5204b887746d7c6p1f08a2jsne0cece879d15',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        },}
      );

      return data;
    } catch (error){
        return null
    }
}