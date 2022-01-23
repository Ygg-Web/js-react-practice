export class Validators {
  static required(value){
    return value && value.trim()
  }

  static minLenght(length){
    return value => {
      return value.length >= length
    }
  }

}