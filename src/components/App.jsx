import Profile from './profile'
import profileData from '../user.json'
import data from '../data.json'
import Statistic from './statistic'
import friendsData from '../friends.json'
import FriendList from './friendList'
import transactions from '../transactions.json'
import TransactionHistory from './TransactionHistory'

export const App = () => {
  return (
    <>
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
