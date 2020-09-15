import React from "react";

import "./UsersList.css";
import onlineIcon from "../../icons/onlineIcon.png";

const UsersList = ({ users }) => {
  console.log(users);
  return (
    <div className="listContainer">
      <header className="usersListHeader">Users Online</header>
      <ul className="list">
        {users &&
          users.map((user) => (
            <li className="listElement">
              <img src={onlineIcon} alt="online" />
              <span>{user.name}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default UsersList;
