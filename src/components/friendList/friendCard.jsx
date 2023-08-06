import PropTypes from 'prop-types'
import { Status, Online, Avatar, Name } from './friendCard.style'



export default function FriendItem({ items: { isOnline, name, avatar } }) {
	return (
		<>
			{isOnline ? <Online className="status online">{isOnline}</Online> : <Status className="status">{isOnline}</Status>}
			<Avatar className="avatar" src={avatar} alt="User avatar" width="48" />
			<Name className="name">{name}</Name>
		</>
	);
}


FriendItem.propTypes = {
	items: PropTypes.shape({
		isOnline: PropTypes.bool,
		name: PropTypes.string,
		avatar: PropTypes.string,
})
}