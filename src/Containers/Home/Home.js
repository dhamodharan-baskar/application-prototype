import React from 'react';
import Header from './components/Header';
import {
Overview
} from './home.styles'
import {

} from '../../Constants/constant'
import CircleLoader from "react-spinners/ClipLoader";
import { toast } from 'react-toastify';

class Home extends React.Component {
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
    Home
  </Overview>
)

}
}

export default Home

