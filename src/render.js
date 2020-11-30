/**
 * Выводит информацию пользователю
 * 
 * @param {mixed} data
 * @return {undefined}
 */
export function log(...data) {
    console.log(data);
}

export function askFor(message, default) {
    return prompt(message, default);
}