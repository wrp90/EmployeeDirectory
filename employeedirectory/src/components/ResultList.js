import React from "react";

function ResultList(props) {
    return (
        <div>
            {console.log('??????', props)}
            <table>
                <tbody>
                    
                    {props.users.map(user => (
                        <tr key={user.email}>
                            <td>{user.name.first + ' ' + user.name.last}</td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    );
}

export default ResultList;