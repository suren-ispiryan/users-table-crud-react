import './App.scss';
import {useEffect, useState} from 'react';
import UserModal from './components/UserModal';
import { Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import UsersTable from './components/UsersTable';

const initialState = {
  name: '',
  email: '',
  phone: ''
}

function App() {
  const [btnName, setBtnName] = useState('');
  const [userData, setUserData] = useState(initialState);
  const [usersArray, setUsersArray] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
    setBtnName("Add")
  };

  useEffect(() => {
    if (!show) {
      setUserData(initialState)
    }
  }, [show])

  const addUser = () => {
    setShow(false)
    setUsersArray([
      ...usersArray,
      {...userData, id: uuidv4()}
    ])
  }

  const edit = (id) => {
    setShow(true)
    const user = usersArray.find(u => u.id === id);
    setUserData(user)
  }

  const updateUser = (data) => {
    const userIndex = usersArray.findIndex(u => u.id === data.id);
    const usersCopy = [...usersArray]
    usersCopy[userIndex] = data
    setUsersArray(usersCopy)
    setShow(false)
  }

  const deleteUser = (id) => {
    const userIndex = usersArray.findIndex(u => u.id === id);
    const usersCopy = [...usersArray]
    usersCopy.splice(userIndex, 1)
    setUsersArray(usersCopy)
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row my-3">
          <div className="col-md-4 table-heading">
            <h2>Users</h2>
          </div>
          <div className="col-md-6" />
          <div className="col-md-2 add-btn">
            <UserModal
                setUserData={setUserData}
                userData={userData}
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}
                addUser={addUser}
                updateUser={updateUser}
            />
            <Button variant="primary" onClick={handleShow}>Add user</Button>
          </div>
        </div>
      </div>
        <div className="container">
          <UsersTable
              btnName={btnName}
              setBtnName={setBtnName}
              usersArray={usersArray}
              edit={edit}
              deleteUser={deleteUser}
          />
        </div>
    </div>
  );
}

export default App;
