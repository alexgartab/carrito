import React from 'react'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AddIcon from '@material-ui/icons/Add';


const ListaDeLaCompra = ({ catalogo, anadirAlCarrito }) => {
    return (
        <>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{color: 'white'}}>Nombre</TableCell>
                            <TableCell style={{color: 'white'}}>Precio</TableCell>
                            <TableCell style={{color: 'white'}}>Añadir al carrito</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {catalogo.map((producto) => {
                            return <TableRow key={producto.nombre}>
                                <TableCell style={{color: 'white'}}>{producto.nombre}</TableCell>
                                <TableCell style={{color: 'white'}}>{producto.precio}€/kilo</TableCell>
                                <TableCell style={{color: 'white'}}><AddIcon color="primary" onClick={()=> {anadirAlCarrito(producto)}} /></TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

ListaDeLaCompra.propTypes = {
    anadirAlCarrito: PropTypes.func.isRequired,
    catalogo: PropTypes.arrayOf(
        PropTypes.shape({
            nombre: PropTypes.string.isRequired,
            precio: PropTypes.number.isRequired
        })
    )
}

export default ListaDeLaCompra
