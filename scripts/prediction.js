//key required from "https://developer.accuweather.com/"
const key="xKf90EenFbqcHagCchAJ0vny1dKBXHDo";
//get wheather info
const getWeatherInfo=async(id)=>{
    const url="http://dataservice.accuweather.com/currentconditions/v1/";
    const query=`${id}?apikey=${key}`;
    const res=await fetch(url+query);
    const data=await res.json();
    return data[0];
}
//getting city
const getCity=async(location)=>{
    const url="http://dataservice.accuweather.com/locations/v1/cities/search";
    const query=`?apikey=${key}?q=${location}`;
    const res=await fetch(url+query);
    const data=await res.json();
    return data[0];


};
getCity('adana')
    .then(data=>{
       return getWeatherInfo(data.Key);

    })
    .then(data=>{
        console.log(data);
        }
    )
    .catch(err=>{
        console.log(err);
    });
