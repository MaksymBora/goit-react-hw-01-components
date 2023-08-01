function FriendItem({ data }) {
	return (data.map(({ avatar, name, isOnline, id }) => {
		const online = isOnline ? <span className="status online">{isOnline}</span> : <span className="status">{isOnline}</span>;
		return (
			<li key={id} className="friend-item" >
			{online}
			{/* <span className="status">{isOnline}</span> */}
			<img className="avatar" src={avatar} alt="User avatar" width="48" />
			<p className="name">{name}</p>
		</li>)
	
	}
	));
} 



export default function FriendList({props}) {

	return (
		<ul className="friend-list">
			<FriendItem data={ props} />
		</ul>
	);
}