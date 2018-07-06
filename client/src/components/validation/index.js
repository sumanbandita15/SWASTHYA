export const required = value => (value ? undefined : 'Required');
export const nonEmpty = value =>
    value.trim() !== '' ? undefined : 'Cannot be empty';
export const email = value =>
    /^\S+@\S+$/.test(value) ? undefined : 'Must be a valid email address';
export const passwordMatch = (value,allValues) => (value===allValues['password'])? undefined : 'Password doesn\'t match';