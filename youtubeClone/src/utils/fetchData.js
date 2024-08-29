// export const BASEURL='https://youtube-v31.p.rapidapi.com';
export const BASEURL='https://youtube-v3-lite.p.rapidapi.com';


export const options={ 
    method: 'GET',

headers: {
  'x-rapidapi-key': String(import.meta.env.VITE_RAPID_API_KEY),
  // 'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  'x-rapidapi-host': 'youtube-v3-lite.p.rapidapi.com'
}
}



export const fetchData=async(url)=>{
    const response=await fetch(url,options);
    const data=await response.json();

    return data;
}