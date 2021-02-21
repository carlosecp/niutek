// Aca se importan todos los tipos diferentes de valores de retorno de las busquedas para que los valores pasados a los componentes de busqueda vayan de acuerdo con lo que deberian tener.
import type { SearchResult as PersonaNatural } from '../components/app/pages/clientes/persona_natural/data'

export type GlobalSearchResults = PersonaNatural

export type GlobalSearchConfig = {
	placeholder: string
	url: string
}
