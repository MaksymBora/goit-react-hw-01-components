export default function FriendItem({items: {isOnline, name, avatar}}) {
	return (
		<>
			{isOnline ? <span className="status online">{isOnline}</span> : <span className="status">{isOnline}</span>}
			<img className="avatar" src={avatar} alt="User avatar" width="48" />
			<p className="name">{name}</p>
		</>
	);
}