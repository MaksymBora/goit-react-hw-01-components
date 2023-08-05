import StatsItems from "./statsItems";
import {Statisctics, Title, StatList, Item} from './statistic.style'



const getRandomColor = () => {
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  return randomColor;
};

export default function Statistic({ stats, title }) {
	return (
		<Statisctics className="statistics">
			{title && <Title className="title">{title}</Title>}
			<StatList className="stat-list">
				{stats.map((stat, index) => {
					const color = getRandomColor(); 
					return (
						<Item key={stat.id} className="item" color={color}>
							<StatsItems stats={stat} />
						</Item>);
				}) }
			</StatList>
		</Statisctics>
	);
}


