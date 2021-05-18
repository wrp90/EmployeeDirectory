import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultContainer extends Component {
    state = {
        search: "",
        users: [],
        originalUsers: [],
    };

    componentDidMount() {
        this.apiCall(20);
    }

    apiCall = (query) => {
        API.getEmployees(query)
            .then(res => {
                this.setState({ 
                    users: res.data.results,
                    originalUsers: res.data.results
                })
            })
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value;
        const results = this.state.originalUsers;
        console.log('this is current(filtered): ', this.state.users, 'this is the original list: ', this.state.originalUsers)
        console.log('value:', value)
        console.log('results', results)
        const matchedUsers = results.filter((result) => {
            // put the first and last name together with a space
            const fullName = (result.name.first + ' ' + result.name.last).toLowerCase();
            console.log('the full name is ', fullName, ' and the value is ', value)
            // return true or false if the first/last combo includes the value
            const isThereAMatch = fullName.includes(value);
            return isThereAMatch;
            // // return this result if the first name start w/ blankety blank
            // return result.name.first.startsWith(`${value}`);
        });
        
        this.setState({
            search: value,
            users: matchedUsers
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
