import React from 'react'
import PropTypes from 'prop-types'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import './Carrito.css';

const Carrito = ({ listaDeLaCompra }) => {

    const getTotalCost = () => {
        if(listaDeLaCompra.length === 0){
            return 0
        } else {
            let coste = 0
            listaDeLaCompra.forEach(producto => {
                coste += producto.cantidad * producto.precio
            });
            return coste.toFixed(2)
        }
    }

    return (
        <div>
            <Accordion>
                <AccordionSummary>
                    <ShoppingCartIcon fontSize='large' />
                </AccordionSummary>
                <AccordionDetails>
                    <div style={{display: "flex", flexDirection: 'column'}}>
                        <ol>
                            {listaDeLaCompra.map((productos) => {
                                return <li key={productos.nombre + productos.precio}> {productos.nombre + ' ' + productos.precio + '€/kilo Cantidad:' + productos.cantidad} </li>
                            })}
                        </ol>
                        <p>Total: {getTotalCost()}€</p>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

Carrito.propTypes = {
    listaDeLaCompra: PropTypes.arrayOf(PropTypes.shape({
        nombre: PropTypes.string.isRequired,
        precio: PropTypes.number.isRequired,
        cantidad: PropTypes.number.isRequired
    }))
}

export default Carrito
