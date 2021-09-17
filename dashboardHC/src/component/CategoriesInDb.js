import React from "react";
import { API_PRODUCTS } from '../config';

class LastUserInDb extends React.Component{
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
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Categorías en la base de datos
            </h5>
          </div>
          {products.map(product=>{
            return(
              <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6 mb-4">
                      <div className="card bg-dark text-white shadow">
                          <div className="card-body">{product.category.info}</div>
                      </div>
                    </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default LastUserInDb;
