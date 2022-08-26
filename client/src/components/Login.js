import { GoogleLogin } from 'react-google-login';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import '../index.css';
import { useState, useEffect } from 'react';
import {
  postId,
  fetchId,
  fetchLocationsId,
  removeId,
} from '../services/service';
import '../App.css';

const clientId =
  '920146011440-2som4b9al73g4gesg373a1k7fbt6mno7.apps.googleusercontent.com';
const Login = () => {
  const [id, setId] = useState([{}]);

  let history = useHistory();

  const onSuccess = async (res) => {
    console.log('LOGIN SUCCESS! Current user: ', res.profileObj);
    let checkId = await fetchId();

    console.log(checkId);
    let hours = new Date().getHours();
    if (
      // hours === 21 ||
      hours === 22 ||
      hours === 23 ||
      hours === 24 ||
      hours === 1 ||
      hours === 2 ||
      hours === 3 ||
      hours === 4 ||
      hours === 5 ||
      hours === 6 ||
      hours === 7 ||
      hours === 8
    ) {
      if (checkId.length) {
        history.push('/loggedinWinner');
      } else {
        await postId(res.profileObj.googleId);
        history.push('/question');
      }
    } else {
      if (checkId.length) {
        history.push('/deciding');
      } else {
        await postId(res.profileObj.googleId);
        history.push('/question');
      }
    }
    // let auth = fetchLocationsId().then((data) => {
    //   setId(data);
    //   console.log(data);
    // });
    // if (auth) {
    //   //change route to heard is now deciding
    //   history.push('/deciding');
    // } else {
    //   history.push('/question');
    // }
    console.log(id);
    // console.log(data);
  };

  const onFailure = (res) => {
    console.log('LOGIN SUCCESS! Current user: ', res);
  };

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText=""
        render={(renderProps) => (
          <button onClick={renderProps.onClick} className="button ml-big">
            Login
          </button>
        )}
        onSuccess={onSuccess}
        ofFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        uxMode="popup"
        // redirectUri={'http://localhost:3000/question'}
      ></GoogleLogin>
    </div>
  );
};

export default Login;
