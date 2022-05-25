import { Button, Modal } from 'react-bootstrap';

const UserModal = (props) => {
    const {
        show,
        handleClose,
        addUser,
        userData,
        setUserData,
        updateUser
    } = props

    const handleChange = ({ target }) => {
        setUserData({
            ...userData,
            [target.name]: target.value
        })
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{userData?.id ? 'Update' : 'Add'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <input
                        type="text"
                        name="name"
                        className="form-control my-2"
                        placeholder="User name"
                        value={userData.name}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        className="form-control my-2"
                        placeholder="User email"
                        value={userData.email}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="phone"
                        className="form-control my-2"
                        placeholder="User phone"
                        value={userData.phone}
                        onChange={handleChange}
                    />
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button
                    variant="success"
                    onClick={() => userData.id ? updateUser(userData) : addUser(userData)}>
                    {userData?.id ? 'Update' : 'Add'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UserModal;
