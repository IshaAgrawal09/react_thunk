import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../Redux/Action";

const UserContainer = ({ userData, fetchUsers }) => {
  const fetchData = () => {
    fetchUsers();
  };
  console.log(userData.users);
  return (
    <div>
      <h3>Click on the button</h3>
      <button onClick={fetchData}>FETCH</button>
      {userData.loading ? (
        <p>Loading....</p>
      ) : userData.error.length ? (
        <p>{userData.error}</p>
      ) : (
        <div>
          {userData.users.map((item, index) => {
            return <p key={index}>{item.name}</p>;
          })}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    userData: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
