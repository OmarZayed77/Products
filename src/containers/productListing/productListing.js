import React, { Component } from 'react';
import {Table, Button} from 'element-react/next';
import cssClasses from './productListing.module.css';
import {withRouter} from 'react-router-dom';

class ProductListing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // columns' names, labels, style & layout for Element UI Table  
      columns: [
        {
          label: "Image",
          prop: "image",
          width: 260,
          align: "center",
          render: function(data){
            return (
            <span>
              <img src={data.imageUrl} className={cssClasses.tableImage} alt="Product's"/>
            </span>)
          }
        },
        {
          label: "Name",
          prop: "name",
          width: 210,
          align: "center",
          render: function(data){
            return (<>{data.name}</>);
          }
        },
      
        {
          label: "Price",
          prop: "price",
          width: 210,
          align: "center",
          render: function(data){
            return (<>{data.price}  L.E.</>);
          }
        },
        {
          label: "Producer",
          prop: "company",
          width: 210,
          align: "center",
          render: function(data){
            return (<>{data.companyName}</>);
          }
        },
        {
          label: "",
          width: 300,
          align: "center",
          render: (data) => {
            return (
              <span>
               <Button type="info" size="medium" icon="edit" onClick={()=>{this.props.history.push(`products/edit/${data.id}`)}}> Edit</Button>
              </span>
            )
          }
        }
      ]
    }
  }
  
  // Styling Object to style the element ui table itself
  tableStyle = {
    marginLeft: 'auto',
    fontWeight: 'bold'
  }
  render() {
    return (
      <Table
        style={this.tableStyle}
        columns={this.state.columns}
        data={this.props.products}
        border={true}
        highlightCurrentRow={true}
      />
    )
  }
}

export default withRouter(ProductListing);
