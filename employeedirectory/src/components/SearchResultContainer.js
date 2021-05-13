import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultContainer extends Component {
    state = {
        search: "",
        results: []
    };

    componentDidMount() {
        this.apiCall();
    }

    apiCall = query => {
        API.search(query)
            .then(res => this.setState({ results: res.data.data }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
    
        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
        this.setState({
          firstName: "",
          lastName: ""
        });
    };

    render() {
        return (
            <div>
                <SearchForm
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <ResultList results={this.state.results} />
            </div>
        );
    }
}

export default SearchResultContainer;
