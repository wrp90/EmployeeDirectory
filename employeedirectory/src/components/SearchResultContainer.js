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
        this.apiCall(20);
    }

    apiCall = (query) => {
        API.getEmployees(query)
            .then(res => {
                this.setState({ users: res.data.results })
            })
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        console.log('event1:', event)
        const value = event.target.value;
        const results = this.state.users

        const newUser = results.filter((result) => result.name.first.startsWith(`${value}`));

        this.setState({
            search: value,
            users: newUser
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        console.log('event2: ', event)
        event.preventDefault();


        const results = this.state.users;
        const newSort = results.sort((userA, userB) => userA.name.first.localeCompare(userB.name.first));

        this.setState({
            users: newSort
        });
    };


    render() {
        return (
            <div>
                <SearchForm
                    name="search"
                    value={this.state.users}
                    handleInputChange={this.handleInputChange}
                />
                <ResultList users={this.state.users} handleFormSubmit={this.handleFormSubmit} />
            </div>
        );
    }
}

export default SearchResultContainer;
