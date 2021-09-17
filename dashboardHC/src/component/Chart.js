import React from 'react';
import ChartRow from './ChartRow';
import { API_PRODUCTS } from './../config';

class Chart extends React.Component{
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
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quota</th>
                                    <th>Stock</th>
                                    <th>Productdescription</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    products.map( ( row , i) => {
                                        return <ChartRow { ...row} key={i}/>
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

export default Chart;