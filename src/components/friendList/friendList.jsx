import FriendItem from "./friendCard";

export default function FriendList({props}) {

	return (
		<ul className="friend-list">
			{props.map(prop => {
				return (
					<li key={prop.id} className="friend-item" >
						<FriendItem items={prop} />
					</li>
	)
})}
		</ul>
	);
}