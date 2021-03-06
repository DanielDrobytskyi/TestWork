import React from "react"
import { Link } from "gatsby"
const data = [
	{
		id: 1,
		text: "Корпаративные сайты",
		url: "/",
	},
	{
		id: 2,
		text: "Интернет магазины",
		url: "/",
	},
	{
		id: 3,
		text: "Лэндинг",
		url: "/",
	},
]

const tempLinks = data.map(link => {
	return (
		<li key={link.id}>
			<Link to={link.url}>{link.text}</Link>
		</li>
	)
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
	return (
		<ul className={`work-links ${styleClass ? styleClass : ""}`}>
			{tempLinks}
		</ul>
	)
}
