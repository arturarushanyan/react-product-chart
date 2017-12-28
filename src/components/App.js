import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
    constructor(props){
        super(props);
        this.state = {filterText: '', inStockOnly: false}
        this.toggleCheckbox = this.toggleCheckbox.bind(this)
        this.toggleCheckbox = this.toggleCheckbox.bind(this)
        this.changeFilterText = this.changeFilterText.bind(this)
    }
    changeFilterText(e){
        const value = e.target.value;
        this.setState({filterText: value})
    }
    toggleCheckbox(e){
        const value = e.target.checked;
        this.setState({inStockOnly: value})
    }
  render() {
    return (
      <div className="App">
          <SearchBar
              filterText = {this.state.filterText}
              inStockOnly ={this.state.inStockOnly}
              toggleCheckbox = {this.toggleCheckbox}
              changeFilterText = {this.changeFilterText}/>
          <ProductTable filterText = {this.state.filterText} inStockOnly ={this.state.inStockOnly} products = {this.props.products}/>
      </div>
    );
  }
}

export default FilterableProductTable;
