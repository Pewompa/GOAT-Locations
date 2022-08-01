import { GoogleLogin } from 'react-google-login';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import '../index.css';
import { useState, useEffect } from 'react';
import { postId, fetchId, fetchLocationsId } from '../services/service';
import '../App.css';

const clientId =
  '920146011440-2som4b9al73g4gesg373a1k7fbt6mno7.apps.googleusercontent.com';
const Login = () => {
  const [id, setId] = useState([{}]);
  const [questionType, setQuestionType] = useState([]);

  let history = useHistory();

  const onSuccess = async (res) => {
    console.log('LOGIN SUCCESS! Current user: ', res.profileObj);
    let data = await postId(res.profileObj.googleId);
    let auth = fetchLocationsId().then((data) => {
      setId(data);
      console.log(data);
    });
    if (auth) {
      //change route to heard is now deciding
      history.push('/maps');
    } else {
      history.push('/question');
    }
    console.log(id);
    console.log(data);
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
