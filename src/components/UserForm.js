import React, { useState } from 'react';

const UserForm = (props) => {
    const [users, setUsers] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();

        const newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };
        setUsers([...users, newUser]);
        console.log("Welcome", newUser);
        console.log(users);
    };
    return (
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div>

                {

                    users.map((user, index) => {
                        return(
                        <div>
                            <p>{user.firstName}</p>
                            <p>{user.lastName}</p>
                            <p>{user.email}</p>
                        </div>);
                    })
                }

            </div>
        </div>
    )
};
export default UserForm;