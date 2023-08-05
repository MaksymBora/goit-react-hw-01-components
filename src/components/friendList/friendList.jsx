import FriendItem from "./friendCard";
import {Friends, Item} from './friendList.style'


export default function FriendList({props}) {

	return (
		<Friends className="friend-list">
			{props.map(prop => {
				return (
					<Item key={prop.id} className="friend-item" >
						<FriendItem items={prop} />
					</Item>
	)
})}
		</Friends>
	);
}