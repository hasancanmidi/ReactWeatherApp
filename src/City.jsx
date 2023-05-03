import React from 'react'

export const City = ({city}) => {
  return (
    <div>
        <h1>Sıcaklık dereceniz : {city.main.temp} C</h1>
        <h1>Şehriniz : {city.name}</h1>
        <h1>Hava Nasıl ? : {city.weather[0].main}</h1>
    </div>
  )
}
