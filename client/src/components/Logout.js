import { GoogleLogout } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import '../index.css';
import '../App.css';
import { removeId, fetchId } from '../services/service';
import { useState, useEffect } from 'react';
const clientId =
  '920146011440-2som4b9al73g4gesg373a1k7fbt6mno7.apps.googleusercontent.com';

const Logout = () => {
  const [id, setId] = useState([]);
  let history = useHistory();

  const onSuccess = async (res) => {
    fetchId().then((data) => {
      console.log(data);
      setId(data);
    });
    console.log('Log out successful!');
    history.push('/');
    let data = await removeId(id.googleId);
    console.log(data);
    console.log(id);
  };
  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText={''}
        render={(renderProps) => (
          <button onClick={renderProps.onClick} className="button ml-big">
            Logout
          </button>
        )}
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
};

export default Logout;
