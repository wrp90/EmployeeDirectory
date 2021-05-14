import React from "react";

function ResultList(props) {
    return (
        <div>
            <table>
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