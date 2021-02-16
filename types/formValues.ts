import type {
	valuesPersonaNatural,
	validationsPersonaNatural,
} from '../data/clientes/persona_natural/data'

// & NOTA
// Aca va la conjuncion de todos los valores de clientes
type ValuesClientes = valuesPersonaNatural
type ValidationsClientes = validationsPersonaNatural

// Aca debiera ir la conjuncion de todos los valores de productos
// ... y asi

// Aca va la conjuncion de todas las conjunciones anteriores, que finalmente se exporta al component FormPage, que pues, recibe estas validaciones para luego ser leidas dentro de cada formulario.
export type GlobalInitialValues = ValuesClientes
export type GlobalValidationSchemas = ValidationsClientes
