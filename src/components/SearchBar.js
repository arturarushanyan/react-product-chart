import React,{Component} from 'react';

export default class SearchBar extends Component{
    render(){
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        return (
            <form>
                <input type="text" placeholder="Search..." value={filterText} onChange={this.props.changeFilterText}/>
                <p>
                    <input type="checkbox" checked={inStockOnly} onChange={this.props.toggleCheckbox}/>
                    {' '}
                    Only show products in stock
                </p>
            </form>
        )
    }
}