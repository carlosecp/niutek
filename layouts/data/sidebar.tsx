import * as Icons from 'react-bootstrap-icons'

const sidebar = [
	{
		name: 'Clientes',
		path: 'clientes',
		items: [
			{
				anchor: 'Persona Natural',
				subpath: 'persona_natural',
				icon: <Icons.PersonCheck />
			},
			{
				anchor: 'Persona Juridica',
				subpath: 'persona_juridica',
				icon: <Icons.People />
			}
		]
	},
	{
		name: 'Garantías',
		path: 'garantias',
		items: [
			{
				anchor: 'Tipo 1',
				subpath: 'garantias_1',
				icon: <Icons.PersonCheck />
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
				icon: <Icons.Wallet2 />
			},
			{
				anchor: 'Certificados a Plazo Fijo',
				subpath: 'certificados_plazo_fijo',
				icon: <Icons.FileEarmarkMedical />
			}
		]
	},
	{
		name: 'Crédito',
		path: 'credito',
		items: [
			{
				anchor: 'Productos de Crédito',
				subpath: 'productos',
				icon: <Icons.CreditCard2Front />
			},
			{
				anchor: 'Solicitud',
				subpath: 'solicitud',
				icon: <Icons.JournalPlus />
			},
			{
				anchor: 'Resolución',
				subpath: 'resolucion',
				icon: <Icons.JournalCheck />
			},
			{
				anchor: 'Formalización',
				subpath: 'formalizacion',
				icon: <Icons.JournalText />
			}
		]
	}
]

export default sidebar
