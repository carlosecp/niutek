export const convertArrayToObject = <T extends any>(
	array: T[],
	key: string
) => {
	const initialValue = {}
	return array.reduce((obj, item) => {
		return {
			...obj,
			[item[key]]: item,
		}
	}, initialValue)
}
