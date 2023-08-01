import Profile from './profile'
import profileData from '../user.json'
import data from '../data.json'
import Statistic from './statistic'
import friendsData from '../friends.json'
import FriendList from './friendList'

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
    </>
  );
};
