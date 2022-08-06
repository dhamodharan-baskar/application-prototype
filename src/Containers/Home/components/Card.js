import { useEffect } from 'react';
import {
  CardOverview,
  ImageStyle,
  Text,
  Flex,
  Button
} from '../home.styles'
import { useDispatch, useSelector } from "react-redux";
import {
  getUserBalance
} from '../../../Redux/Actions/account'

const Card = (props) => {
  const {
    userData,
    redirectTo,
  } = props
  let dispatch = useDispatch();
  let accountBalance = useSelector((state) => state.account.userBalance);

  useEffect(() => {
    dispatch(getUserBalance(userData?.id))
  }, [])
  // we can initiate socket and get balance
  // for now getting using the api
  return (
    <CardOverview data-testid="userdetails-card">
      <Flex margin={"12px"}> 
        <ImageStyle src={userData?.profile_picture} />
        <Text 
          padding={"20px"}
          isBold>
          {userData?.firstName} {userData?.lastName}
        </Text>
      </Flex>
      <Flex 
        margin={"24px"} 
        justifyContent={"space-between"}>
        <Text style={{textTransform: "capitalize"}}>
          {userData?.accountDetails?.accountNumber}
        </Text>
        <Text 
          isBold
          capitalize >
          {userData?.accountDetails?.accountType}
        </Text>
      </Flex>
      <Flex 
        margin={"12px"} 
        justifyContent={"space-between"}>
        <Text 
          isBold={true}
          color={userData?.accountDetails?.isActive ? 'green' : '#FFCC00'}>
          {userData?.accountDetails?.isActive ? 'Active' : 'Not Active'}
        </Text>
        <Text
          color={userData?.accountDetails?.kycCompleted ? 'green' : '#FFCC00'}
          isBold={true}>
          {userData?.accountDetails?.kycCompleted ? 'KYC updated' : 'Not Active'}
        </Text>
        <Text isBold>
          {accountBalance?.currency} {accountBalance?.balance}
        </Text>
      </Flex>
      <Flex justifyContent={"flex-end"}>
        <Button onClick={() => redirectTo('transfer')}>Transfer</Button>
        <Button onClick={() => redirectTo('transfer')}> View Detailed Statement</Button>
      </Flex>
    </CardOverview>
  )
};

export default Card;
