export default function Profile({username, avatar, tag, location, stats: {followers, views, likes}}) {
	return (
		<div className="profile"
			>
  		<div className="description" style={{}}>
    		<img
				src={avatar}
				alt="User avatar"
					className="avatar"
					style={{}}
			/>
			<p className="name">{username}</p>
			<p className="tag">@{tag}</p>
			<p className="location">{location}</p>
		</div>

		<ul className="stats" style={{}}>
			<li>
				<span className="label">Followers</span>
				<span className="quantity">{followers}</span>
			</li>
			<li>
				<span className="label">Views</span>
				<span className="quantity">{views}</span>
			</li>
			<li>
				<span className="label">Likes</span>
				<span className="quantity">{likes}</span>
			</li>
		</ul>
	</div>
	);
}