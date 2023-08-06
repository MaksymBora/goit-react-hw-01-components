import PropTypes from 'prop-types'
import UserInfo from './userInfo'
import { Card, Avatar, Name, Tag, Location, Stats } from './profile.style'


export default function Profile({ username, avatar, tag, location, stats: { followers, views, likes } }) {
	return (
		<Card className="profile">
			<div className="description">
				<Avatar
					src={avatar}
					alt="User avatar"
						className="avatar"
						style={{}}
				/>
				<Name className="name">{username}</Name>
				<Tag className="tag">@{tag}</Tag>
				<Location className="location">{location}</Location>
			</div>

			<Stats className="stats">
				<li>
					<UserInfo label="Followers" quantity={followers} />
				</li>
				<li>
					<UserInfo label="Views" quantity={views} />
				</li>
				<li>
					<UserInfo label="Likes" quantity={likes} />
				</li>
			</Stats>
		</Card>
	);
}

Profile.propTypes = {
	username: PropTypes.string,
	avatar: PropTypes.string,
	tag: PropTypes.string,
	location: PropTypes.string,
	stats: PropTypes.objectOf(PropTypes.number),
	UserInfo: PropTypes.element,
}