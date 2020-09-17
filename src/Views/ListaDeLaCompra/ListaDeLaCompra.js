import React from 'react';
import PropTypes from 'prop-types';
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
                            <TableCell>Nombre</TableCell>
                            <TableCell>Precio</TableCell>
                            <TableCell>Añadir al carrito</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {catalogo.map((producto) => {
                            return <TableRow key={producto.nombre}>
                                <TableCell>{producto.nombre}</TableCell>
                                <TableCell>{producto.precio}€/kilo</TableCell>
                                <TableCell><AddIcon color="primary" onClick={()=> {anadirAlCarrito(producto)}} /></TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

ListaDeLaCompra.propTypes = {
    catalogo: PropTypes.arrayOf(
        PropTypes.shape({
            nombre: PropTypes.string.isRequired,
            precio: PropTypes.string.isRequired
        })
    ),
    anadirAlCarrito: PropTypes.func
}

export default ListaDeLaCompra
