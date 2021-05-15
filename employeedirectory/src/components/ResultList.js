import React from "react";

function ResultList(props) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col" onClick={props.handleInputChange}>Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">DOB</th>
                    </tr>
                </thead>
                <tbody>

                    {props.users.map(user => (
                        <tr key={user.email}>
                            <td><img alt="thumbnail" className="img-fluid" src={user.picture.thumbnail} /></td>
                            <td>{user.name.first + ' ' + user.name.last}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.dob.date}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}

export default ResultList;