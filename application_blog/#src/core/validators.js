export class Validators {
    static required(value = '') {
        return value && value.trim()
    }
}