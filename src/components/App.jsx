import Profile from './profile/profile.jsx'
import profileData from '../user.json'
import data from '../data.json'
import Statistic from './statistic/statistic.jsx'
import friendsData from '../friends.json'
import FriendList from './friendList/friendList.jsx'
import transactions from '../transactions.json'
import TransactionHistory from './transactionHistory/transactionHistory.jsx'
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
