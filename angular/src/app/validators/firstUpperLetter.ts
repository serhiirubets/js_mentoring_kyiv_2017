export function FirstUpperLetterValidator() {
  return (control) => {
    if (!control.value) {
      return null;
    }

    const name = control.value;
    const firstLetter = name[0];
    const firstUpperLetter = firstLetter.toUpperCase();

    return firstLetter === firstUpperLetter
      ? null
      : {error: 'The first letter is not uppercase'};
  };
}
