import * as Icons from 'react-icons/bs'

const sidebar = [
	{
		name: 'Clientes',
		path: 'clientes',
		items: [
			{
				anchor: 'Persona Natural',
				subpath: 'persona_natural',
				icon: <Icons.BsPersonCheck />
			},
			{
				anchor: 'Persona Juridica',
				subpath: 'persona_juridica',
				icon: <Icons.BsPeople />
			}
		]
	},
	{
		name: 'Productos',
		path: 'productos',
		items: [
			{
				anchor: 'Ahorro',
				subpath: 'ahorro',
				icon: <Icons.BsWallet />
			},
			{
				anchor: 'Certificados a Plazo Fijo',
				subpath: 'certificados_plazo_fijo',
				icon: <Icons.BsCardChecklist />
			},
			{
				anchor: 'Crédito',
				subpath: 'credito',
				icon: <Icons.BsCreditCard />
			}
		]
	}
]

export default sidebar
