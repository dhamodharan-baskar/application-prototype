import Home from './Home'
import { connect } from 'react-redux';
import {
  getUserData
} from '../../Redux/Actions/user'

const mapDispatchToProps = (dispatch) => ({
  getUserData: (userId) => dispatch(getUserData(userId)),
});

const mapStateToProps = (state) => ({
  isLoading: state.user.isLoading,
  userData: state.user.userData
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);