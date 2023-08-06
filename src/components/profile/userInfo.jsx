import PropTypes from 'prop-types'
import { Label, Quantity } from './userInfo.style'



export default function UserInfo({ label, quantity }) {
	return (
		<>
			<Label className="label">{label}</Label>
			<Quantity className="quantity">{quantity}</Quantity>
		</>
	);
}


UserInfo.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
}