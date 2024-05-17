export const callingCodeSelector = (idd) => {
  const { root, suffixes } = idd
  const suffix = suffixes.length <= 1 ? suffixes[0] : ''
  const combineCode = root + suffix
  const callCode = combineCode.replace('+', '')
  return callCode
}

export const currencySelector = (currencies) => {
  return Object.keys(currencies)
}
