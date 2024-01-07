export const defaultFormatChars = {
  '9': /[0-9]/,
  a: /[A-Za-z]/,
  '*': /[A-Za-z0-9]/,
};

export function getUnmaskedValue(value: string, mask: string, maskChar: string): string {
  let unmaskedValue = '';
  const maskArr = mask.split('');
  for (const i in maskArr) {
    if (Object.keys(defaultFormatChars).indexOf(maskArr[i]) >= 0) {
      unmaskedValue += value[i] === maskChar ? '' : value[i];
    }
  }

  return unmaskedValue;
}
