import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import catalogo from '../../Utils/catalogo'
import { ListItem } from 'material-ui'
import { ListItemText } from '@material-ui/core'

const ListaDeLaCompra = ({ pitos }) =>{
    return (
        <div>
            <List> {console.log(catalogo[0])}
                <ListItem><ListItemText>{catalogo[0].nombre}</ListItemText></ListItem>
            </List>

        </div>
    )
}

ListaDeLaCompra.propTypes = {    
    catalogo: PropTypes.arrayOf(
        PropTypes.shape({
            nombre: PropTypes.string.isRequired,
            precio: PropTypes.string.isRequired
        })
    ).isRequired,
}

export default ListaDeLaCompra
