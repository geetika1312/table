import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEdit } from '@fortawesome/free-solid-svg-icons';
import './MembersList.css';

const data = [
  {
    id: '007',
    name: 'Manoj Jaiswal',
    fname: 'Manoj',
    lname: 'Jaiswal',
    email: 'Hellomj007@gmail.com',
    role: 'Manager',
    designation: 'Designer',
    status: 'Active',
    avatar: 'https://via.placeholder.com/40',
    addedon: '20th May 2024',
  },
  {
    id: '008',
    name: 'Yogesh Jadhav',
    fname: 'Yogesh',
    lname: 'Jadhav',
    email: 'Jyogesh19@gmail.com',
    role: 'Manager',
    designation: 'Designer',
    status: 'Active',
    avatar: 'https://via.placeholder.com/40',
    addedon: '20th May 2024',
  },
];

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [userDetails, setUserDetails] = useState(data);

  const handleSelectChange = (id, field, value) => {
    setUserDetails((prevDetails) =>
      prevDetails.map((user) =>
        user.id === id ? { ...user, [field]: value } : user
      )
    );
  };

  return (
    <div className="container">
      <div className="left-section">
        <div className="header">
          <div className="header-title">
            <FontAwesomeIcon icon={faBars} className="icon" />
            <p>My Team</p>
          </div>
          <button className="add-button">Add New</button>
        </div>
        <div className="filters">
          <input type="text" placeholder="Search" className="search-input" />
          <div className="select-filters">
            <p>Filters:</p>
            <select className="filter-select">
              <option value="">by Role</option>
              <option value="Manager">Manager</option>
              <option value="Developer">Developer</option>
            </select>
            <select className="filter-select-Desgination">
              <option value="">by Designation</option>
              <option value="Designer">Designer</option>
              <option value="Engineer">Engineer</option>
            </select>
            <select className="filter-select">
              <option value="">by Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div className="table-container">
          <table className="table-data">
            <thead>
              <tr className="table-heading">
                <th className="first">
                  <div className="radio-button">
                    <input type="radio" name="select-user" />
                    <div>Name</div>
                  </div>
                </th>
                <th>
                  <div>Email</div>
                </th>
                <th>
                  <div>Role</div>
                </th>
                <th>
                  <div>Designation</div>
                </th>
                <th className="second">
                  <div>Status</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {userDetails.map((employee) => (
                <tr key={employee.id} onClick={() => setSelectedUser(employee)}>
                  <td className="first-data">
                    <img
                      src={employee.avatar}
                      alt={employee.name}
                      className="avatar"
                    />
                    <div>{employee.name}</div>
                  </td>
                  <td className="email-row">{employee.email}</td>
                  <td>{employee.role}</td>
                  <td>{employee.designation}</td>
                  <td className="second-data">{employee.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="right-section">
        <div className='inside-box'>
        {selectedUser ? (
          <div>
            <div className="user-details">
              <img
                src={selectedUser.avatar}
                alt={selectedUser.name}
                className="avatar-large"
              />
              <div className="details">
                <h2>{selectedUser.name}</h2>
                <p className="user-id">
                  ID: IN{selectedUser.id.toString().padStart(3, '0')}
                </p>
              </div>
              <button className="edit-button">
                <FontAwesomeIcon icon={faEdit} className="edit-icon" />
                <p>Edit</p>
              </button>
            </div>
            <div className="profile-table">
              <table>
                <tbody>
                  <tr>
                    <td className='First-row'>First Name</td>
                    <td>{selectedUser.fname}</td>
                  </tr>
                  <tr>
                    <td className='First-row'>Last Name</td>
                    <td>{selectedUser.lname}</td>
                  </tr>
                  <tr>
                    <td className='First-row'>Email</td>
                    <td>{selectedUser.email}</td>
                  </tr>
                  <tr>
                    <td className='First-row'>Role</td>
                    <td>
                      <select
                        value={selectedUser.role}
                        onChange={(e) =>
                          handleSelectChange(
                            selectedUser.id,
                            'role',
                            e.target.value
                          )
                        }
                        className='role'
                      >
                        <option value="Manager">Manager</option>
                        <option value="Developer">Developer</option>
                        <option value="Designer">Designer</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td className='First-row '>Designation</td>
                    <td >
                      <select
                        value={selectedUser.status}
                        onChange={(e) =>
                          handleSelectChange(
                            selectedUser.id,
                            'status',
                            e.target.value
                          )
                        }
                        className='designation'
                      >
                        <option value="Active">Designer</option>
                        <option value="Inactive"></option>
                      </select></td>
                  </tr>
                  <tr>
                    <td className='First-row'>Status</td>
                    <td>
                      <select
                        value={selectedUser.status}
                        onChange={(e) =>
                          handleSelectChange(
                            selectedUser.id,
                            'status',
                            e.target.value
                          )
                        }
                        className='status'
                      >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </td>
                  </tr>
                  <td className='First-row '>Added on</td>
                    <td>{selectedUser.addedon}</td>
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <p></p>
        )}

        </div>
        
      </div>
    </div>
  );
};

export default App;
