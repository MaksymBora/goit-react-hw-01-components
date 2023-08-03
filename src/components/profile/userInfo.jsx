export default function UserInfo({ label, quantity }) {
	return (
		<>
			<span className="label">{label}</span>
			<span className="quantity">{quantity}</span>
		</>
	);
}