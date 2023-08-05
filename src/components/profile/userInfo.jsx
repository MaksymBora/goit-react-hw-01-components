import {Label} from './userInfo.style'
import {Quantity} from './userInfo.style'


export default function UserInfo({ label, quantity }) {
	return (
		<>
			<Label className="label">{label}</Label>
			<Quantity className="quantity">{quantity}</Quantity>
		</>
	);
}