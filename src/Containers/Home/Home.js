import React from 'react';
import Header from './components/Header';
import {
Overview
} from './home.styles'
import {

} from '../../Constants/constant'
import CircleLoader from "react-spinners/ClipLoader";
import { toast } from 'react-toastify';
import axios from 'axios';

class Home extends React.Component {
constructor(props) {
super(props);
this.state = {
  
};
}

componentDidMount() {
  console.log('coming')
  axios.get('http://localhost:3001/users').then(() => {
    console.log('coming')
  })
}


render() {

return (
  <Overview>
    Home
  </Overview>
)

}
}

export default Home

