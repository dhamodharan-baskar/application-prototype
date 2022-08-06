import React from 'react';
import {
Overview
} from './login.styles'
import {

} from '../../Constants/constant'
import CircleLoader from "react-spinners/ClipLoader";
import { toast } from 'react-toastify';

class Login extends React.Component {
constructor(props) {
super(props);
this.state = {
  
};
}

componentDidMount() {
}


render() {

return (
  <Overview>
    Login
  </Overview>
)

}
}

export default Login

