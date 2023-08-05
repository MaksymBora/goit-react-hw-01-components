import {Status} from './friendCard.style'
import {Online} from './friendCard.style'
import {Avatar} from './friendCard.style'
import {Name} from './friendCard.style'


export default function FriendItem({ items: { isOnline, name, avatar } }) {
	return (
		<>
			{isOnline ? <Online className="status online">{isOnline}</Online> : <Status className="status">{isOnline}</Status>}
			<Avatar className="avatar" src={avatar} alt="User avatar" width="48" />
			<Name className="name">{name}</Name>
		</>
	);
}