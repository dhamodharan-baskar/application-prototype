import React from 'react';
import {
Overview
} from './home.styles'
import {

} from '../../Constants/constant'
import CircleLoader from "react-spinners/ClipLoader";
import { toast } from 'react-toastify';

class Transfer extends React.Component {
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
    Transfer
  </Overview>
)

}
}

export default Transfer

