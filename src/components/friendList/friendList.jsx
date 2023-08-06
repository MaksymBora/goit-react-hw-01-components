import PropTypes from 'prop-types'
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


FriendList.propTypes = {
	props: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
		})
	),
	FriendItem: PropTypes.element
}