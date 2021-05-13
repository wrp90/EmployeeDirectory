import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultContainer extends Component {
    state = {
        search: "",
        users: []
    };

    componentDidMount() {
        this.apiCall();
    }

    apiCall = query => {
        API.getEmployees()
            .then(res => {
                // console.log('!!!!!!!!!!!!!', res.data)
                this.setState({ users: res.data.results})
            })
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        // for each user in the state
        // map thru and find if their name contains value
        // this.setState({
        //     [name]: value
        // });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
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
                    handleInputChange={this.handleInputChange}
                />
                <ResultList users={this.state.users} handleFormSubmit={this.handleFormSubmit}/>
            </div>
        );
    }
}

export default SearchResultContainer;
