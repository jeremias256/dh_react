import React from 'react';
import ChartRowProducts from './ChartRowProducts';
import { API_PRODUCTS } from '../config';

class ChartProducts extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            products: [],           
        }
    }
    componentDidMount(){
        fetch(API_PRODUCTS)

            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    products:data.data.product   
                })
            })
    }
    render(){
        const {products} = this.state
        return (
            
            <div className="card shadow mb-4">
                <h1>Productos disponibles en la base de datos</h1>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quota</th>
                                    <th>Stock</th>
                                    <th>product_description</th>
                                    <th>Category</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quota</th>
                                    <th>Stock</th>
                                    <th>Product description</th>
                                    <th>Category</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    products.map( ( row , i) => {
                                        return <ChartRowProducts { ...row} key={i}/>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }   
}

export default ChartProducts;