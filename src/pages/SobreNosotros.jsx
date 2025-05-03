import React from 'react'

const SobreNosotros = () => {
  return (
    <div>
      <h1>Sobre Nosotros</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: '200px', textAlign: 'center' }}>
          <img src="https://via.placeholder.com/150" alt="Card 1" style={{ width: '100%', borderRadius: '8px' }} />
          <h3>Nombre 1</h3>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: '200px', textAlign: 'center' }}>
          <img src="https://via.placeholder.com/150" alt="Card 2" style={{ width: '100%', borderRadius: '8px' }} />
          <h3>Nombre 2</h3>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: '200px', textAlign: 'center' }}>
          <img src="https://via.placeholder.com/150" alt="Card 3" style={{ width: '100%', borderRadius: '8px' }} />
          <h3>Nombre 3</h3>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: '200px', textAlign: 'center' }}>
          <img src="https://via.placeholder.com/150" alt="Card 4" style={{ width: '100%', borderRadius: '8px' }} />
          <h3>Nombre 4</h3>
        </div>
      </div>
    </div>
  )
}

export default SobreNosotros