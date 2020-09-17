import React from 'react'
import PropTypes from 'prop-types'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import './Carrito.css';

const Carrito = ({ listaDeLaCompra }) => {
    return (
        <div>
            <Accordion>
                <AccordionSummary>
                    <ShoppingCartIcon fontSize='large' />
                </AccordionSummary>
                <AccordionDetails>
                    <ol>
                    {listaDeLaCompra.map((productos)=>{
                        return <li key={productos.nombre+productos.precio}> {productos.nombre + ' ' + productos.precio + '€/kilo'} </li>
                    })}
                    </ol>
                </AccordionDetails>
            </Accordion>
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
