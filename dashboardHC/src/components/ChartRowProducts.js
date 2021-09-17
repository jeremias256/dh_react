import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.price}</td>
                    <td>{props.quota}</td>
                    <td>{props.stock}</td>
                    <td>{props.product_description}</td>
                    <td>{props.category.info}</td>
                </tr>
            )
    }
    
        

export default ChartRow;