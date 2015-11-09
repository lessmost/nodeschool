import React from 'react';

export const FilterableProductTable = React.createClass({
    render() {
        return (
            <div>
                <SearchBar />
                <ProductTable products={this.props.products} />
            </div>
            );
    }
});

export const SearchBar = React.createClass({
    render() {
        return (
            <form>
                <input type="text" placeholder="Searching..." />
                <p>
                    <input type="checkbox" />
                    Only show products in stock
                </p>
            </form>
            );
    }
});

export const ProductTable = React.createClass({
    render() {
        var rows = [];
        var lastCategory = null;
        this.props.products.forEach(function(product) {
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
            }
            rows.push(<ProductRow product={product} key={product.name} />);
            lastCategory = product.category;
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
            );
    }
});

export const ProductCategoryRow = React.createClass({
    render() {
        return (
            <tr>
                <th>{this.props.category}</th>
            </tr>
            );
    }
});

export const ProductRow = React.createClass({
    render() {
        var name = this.props.product.stocked ?
        this.props.product.name :
            <span style={{color: 'red'}}>
                {this.props.product.name}
            </span>;
        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
            );
    }
});

