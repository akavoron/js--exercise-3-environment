/**
 * Выводит информацию пользователю
 * 
 * @param {mixed} data
 * @return {undefined}
 */
export function log(...data) {
    console.log.apply({}, data);
}

export function askFor(message, def) {
    return prompt(message, def);
}