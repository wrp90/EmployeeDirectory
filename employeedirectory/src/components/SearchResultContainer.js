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

    onClick = event => {
        
    };


    render() {
        return (
            <div>
                <SearchForm
                    name="search"
                    value={this.state.users}
                    handleInputChange={this.handleInputChange}
                />
                <ResultList users={this.state.users} onClick={this.onClick} />
            </div>
        );
    }
}

export default SearchResultContainer;
