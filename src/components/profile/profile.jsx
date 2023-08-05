import UserInfo from './UserInfo'
import { Card } from './profile.style'
import {Avatar} from './profile.style'
import {Name} from './profile.style'
import {Tag} from './profile.style'
import {Location} from './profile.style'
import {Stats} from './profile.style'

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