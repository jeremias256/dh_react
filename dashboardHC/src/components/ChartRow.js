import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.price}</td>
                    <td>{props.quota}</td>
                    {/* <td>
                        <ul>
                            {props.Categories.map( (category,i) => 
                                <li key={`category ${i}`}>{category}</li>
                            )}
                        </ul>
                    </td> */}
                    <td>{props.stock}</td>
                    <td>{props.product_description}</td>
                </tr>
            )
    }
    
        

export default ChartRow;