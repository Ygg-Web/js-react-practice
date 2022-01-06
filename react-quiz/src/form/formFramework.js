export function createContol(config, validation){
  return {
    ...config,
    validation,
    valid: !validation,
    touched: false,
    value: ''
  }
}