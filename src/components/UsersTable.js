import { Table } from 'react-bootstrap';

const UsersTable = (props) => {
    const { edit, deleteUser, usersArray } = props
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                {usersArray.map(
                    (item, index) => (
                        <tr key={item.id}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>
                                <button className="btn btn-warning mx-2" onClick={() => edit(item.id)}>Change</button>
                                <button className="btn btn-danger mx-2" onClick={() => deleteUser(item.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                )}
            </tbody>
        </Table>
    );
}

export default UsersTable;
