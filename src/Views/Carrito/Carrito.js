import React from 'react'
import PropTypes from 'prop-types'

const Carrito = ({listaDeLaCompra}) => {
    return (
        <div>
            
        </div>
    )
}

Carrito.propTypes = {
    listaDeLaCompra: PropTypes.arrayOf(PropTypes.shape({
        nombre: PropTypes.string.isRequired,
        precio: PropTypes.string.isRequired
    }))
}

export default Carrito
