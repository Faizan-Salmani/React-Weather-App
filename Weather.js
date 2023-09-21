'use client'
import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {TiWeatherPartlySunny} from 'react-icons/ti'
import axios from 'axios'

const Weather = () => {
    let api = '4c07ce284216198200a0c9c91425ce14';
    const search = async ()=>{
        const input = document.querySelector('.input');
        if(input.value === ''){
        return false;
        }
        else{
           const res =  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=Metric&appid=${api}`)
           const data =  (await res).data;
        //    console.log(data.main.temp)

           const temprature = document.querySelector('.temprature');
           const location = document.querySelector('.location');
           const Humid = document.querySelector('.Humid');
           const Wind = document.querySelector('.Wind');

           temprature.innerHTML = data.main.temp+'C';
           location.innerHTML = input.value;
           Humid.innerHTML = data.main.humidity+'%';
           Wind.innerHTML = data.wind.speed+"km/h";
        }
    }
  return (
    <>
  <div className='Container bg-red-400 w-[500px] h-full m-auto p-[20px] rounded-lg'>
    <div className='Block1 flex justify-center gap-[20px] '>
    <input type='text' className=' input border-2 outline-none px-4 py-2 rounded-[25px] w-[300px]'/>
    <h2 className='bg-white w-[40px] h-[40px] rounded-full pt-[11px] pl-[10px] mt-[2px] cursor-pointer' onClick={search}>{<AiOutlineSearch size={20}/>}</h2>
    </div>
    <div className='w-[160px] h-[160px] ml-[28%] mt-[20px]'><img src='./image/cloudy (1).png' className='w-full h-full'/></div>
    <div className=' mt-[20px] text-5xl w-full text-center'><h2 className='temprature '>28°C</h2>
    </div>
    <div className=' text-center'><p className=' location text-3xl'>London</p></div>

   <div className=' w-[400px] flex justify-between pt-7  m-auto'>

    <div className='w-[140px] '><div className='flex'><img src='./image/river.png' className='w-[40px] h-[40px]'/> <h2 className=' Humid text-3xl ml-[20px]'>64%</h2></div><div className='  text-xl ml-[50px]'>Humidity</div></div>
    <div className='w-[140px]'><div className='flex'><img src='./image/wind.png' className='w-[40px] h-[40px]'/> <h2 className=' Wind text-3xl'>18km/h </h2></div><div className='text-xl ml-[40px]'>windspeed</div></div>

   </div>
  </div>
    </>
  )
}

export default Weather