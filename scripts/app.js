const form=document.querySelector('form');
const detail=document.querySelector('.detay');
const card=document.querySelector('.card');
//fill form according to wheater info
const updateUI=(data)=>{
    const cityDetail=data.cityDetail;
    const weatherInfo=data.weatherInfo;
    detail.innerHTML=`
    <div class="text-muted text-uppercase text-center detay">
        <h5 class="my-3">${cityDetail.LocalizedName}</h5>
        <div class="my-3">${weatherInfo.WeatherText}</div> 
        <div class="display-4 my-4">
            <span>${weatherInfo.Temperature.Metric.Value}</span>
            <span>&deg;C</span>

         </div>

    </div>`;

    if (card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
    }
//trigger form when city is entered
form.addEventListener('submit',(e)=>{

    e.preventDefault();
    const city=form.sehir.value.trim();
    updateCity(city)
        .then(data=>{
            updateUI(data);
            
        });
    form.reset();
});

//get city info
const updateCity=async (city)=>{
    const cityDetail= await getCity(city);
    const weatherInfo=await getWeatherInfo(cityDetail.Key);
    return{
        cityDetail,
        weatherInfo
    }
};