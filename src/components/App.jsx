import Profile from './profile/Profile'
import profileData from '../user.json'
import data from '../data.json'
import Statistic from './statistic/Statistic'
import friendsData from '../friends.json'
import FriendList from './friendList/FriendList'
import transactions from '../transactions.json'
import TransactionHistory from './transactionHistory/TransactionHistory'
import { GlobalStyle } from './GlobalStyle'

export const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Profile
        username={profileData.username}
        tag={profileData.tag}
        location={profileData.location}
        avatar={profileData.avatar}
        stats={profileData.stats}
      />
    
      <Statistic title="Upload stats" stats={data} />

      <FriendList props={friendsData} />

      <TransactionHistory transactionsItems={transactions} />

      
    </>
  );
};
