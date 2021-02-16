import type {
	ValuesPersonaNatural,
	ValidationsPersonaNatural,
} from '../data/clientes/persona_natural/_data'

// & NOTA
// Aca va la conjuncion de todos los valores de clientes
type ValuesClientes = ValuesPersonaNatural
type ValidationsClientes = ValidationsPersonaNatural

// Aca debiera ir la conjuncion de todos los valores de productos
// ... y asi

// Aca va la conjuncion de todas las conjunciones anteriores, que finalmente se exporta al component FormPage, que pues, recibe estas validaciones para luego ser leidas dentro de cada formulario.
export type InitialValues = ValuesClientes
export type ValidationSchemas = ValidationsClientes
