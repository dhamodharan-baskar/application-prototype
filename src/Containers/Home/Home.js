import React from 'react';
import {
Overview,
Text
} from './home.styles'
import CircleLoader from "react-spinners/ClipLoader";
import Card from './components/Card';
import Statement from './components/Statement';

class Home extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    showStatement: false
  }
}

componentDidMount() {
  this.props.getUserData(1)
}

redirectTo = (page) => {
  console.log('props', this.props)
  this.props.history.push('/login')
}

setShowStatement = () => {
  this.setState({showStatement: !this.state.showStatement})
}

render() {
  const {
  userData,
  isLoading,
  } = this.props
  const { showStatement } = this.state

  if(isLoading) {
    return(
      <Overview>
        <CircleLoader />
      </Overview>
    )
  }

  return (
    <Overview>
      <Card 
        userData={userData}
        setShowStatement={this.setShowStatement}
        redirectTo={(page) => this.redirectTo(page)}/>
      <Text 
        isBold 
        cursor={'pointer'}
        onClick={this.setShowStatement}>
        Show statement
      </Text>
      {
        showStatement && 
        <Statement 
        showStatement={showStatement}
        userData={userData}/>
      }
    
    </Overview>
  )
 }
}

export default Home

