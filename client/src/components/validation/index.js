export const required = value => (value ? undefined : 'Required');
export const nonEmpty = value =>
    value.trim() !== '' ? undefined : 'Cannot be empty';
export const email = value =>
    /^\S+@\S+$/.test(value) ? undefined : 'Must be a valid email address';
export const length = length => value => {
    if (length.min && value.length < length.min) {
        return `Must be at least ${length.min} characters long`;
    }
    if (length.max && value.length > length.max) {
        return `Must be at most ${length.max} characters long`;
    }
};
export const passwordMatch = (value,allValues) => (value===allValues['password'])? undefined : 'Password doesn\'t match';
export const isTrimmed = value =>
    value.trim() === value ? undefined : 'Cannot start or end with whitespace';
export const number = value => value && isNaN(Number(value)) ? 'Must be a number between 1 to 100' : undefined;
export const selected = value => value && value === 'ALL' ? 'Must choose a category' : undefined;

