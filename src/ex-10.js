/**
 * Пользователь вводит текстовую строку.
 *
 * Определить с помощью регулярного выражения, является ли введённая строка:
 * 1. Датой.
 * 2. Адресом электронной почты.
 * 3. Номером телефона.
 */

/**
 * Проверяет, является ли строка датой.
 *
 * @param {string} string
 * @return {boolean}
 */

export function isDate(string) {
  const regexp = /(\d{1,2}[. /-]\d{1,2}[. /-]\d{2,4})|(\d{2,4}[. /-]\d{1,2}[. /-]\d{1,2})/;
  return string.search(regexp) !== -1;
}

/**
 * Проверяет, является ли строка email-адресом.
 *
 * @param {string} string
 * @return {boolean}
 */

export function isEmail(string) {
  return string.search(/^[A-Za-z\d-]*@[A-Za-z\d-]{2,}\.[A-Za-z]{2,}$/) !== -1;
}

/**
 * Проверяет, является ли строка телефоном.
 *
 * @param {string} string
 * @return {boolean}
 */

export function isTel(string) {
  return (
    string.search(
      /^[+]?\d[\s -]?\(?\d{3}\)?[\s -]?\d{3}[\s -]?\d{2}[\s -]?\d{2}$/
    ) !== -1
  );
}
