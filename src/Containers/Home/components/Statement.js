import {
Text,
Flex,
StatementView,
Balance,
Amount,
Description,
Date
} from '../home.styles'
import { useDispatch, useSelector } from "react-redux";
import {
getUserStatement
} from '../../../Redux/Actions/account'
import { useEffect } from 'react';

const Statement = (props) => {
const {
userData
} = props;
let dispatch = useDispatch();
let statement = useSelector((state) => state.account.statement);

useEffect(() => {
dispatch(getUserStatement(userData?.id))
}, [])


return (
<StatementView>
  {renderStatement(statement)}
</StatementView>
)
};

const renderStatement = (statement) => {
return(
  <>
  {
    statement.map((item)=> {
      return(
        <Flex 
          justifyContent={"space-between"}
          key={`statement-mini-${item.id}`}>
          <Date>25th Aug</Date>
          <Description>{item?.description}</Description>
          <Amount>{item?.amount}</Amount>
          <Balance>{item?.accountBalance}</Balance>
        </Flex>
      )
    })
  }
  </>
)
}

export default Statement;
