import Profile from './profile'
import profileData from '../user.json'

export const App = () => {
  return (
    <>
      {/* <Profile items={profileData} /> */}
      <Profile
        username={profileData.username}
        tag={profileData.tag}
        location={profileData.location}
        avatar={profileData.avatar}
        stats={profileData.stats}
      />
    </>
  );
};
