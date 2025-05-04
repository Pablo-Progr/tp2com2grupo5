import React from 'react'

const Mapa = () => {
  return (
    <div style={{ width: '200px', height: '200px' }}>
      <iframe
        title="Mapa UTN"
        src="https://www.google.com/maps/embed?pb=..."
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen="https://www.google.com/maps/place/Universidad+Tecnol%C3%B3gica+Nacional+-+Facultad+Regional+Tucum%C3%A1n/@-26.8171,-65.1985333,17z/data=!3m1!4b1!4m6!3m5!1s0x94225c23b7b6e863:0x976c9adc5013942c!8m2!3d-26.8171!4d-65.1985333!16s%2Fm%2F09v95vv?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D"
        loading="lazy"
      ></iframe>
    </div>
  )
}

export default Mapa