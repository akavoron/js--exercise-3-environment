export function TypeException(rightType) {
    this.message = `You should use a ${rightType} type in the param.`;
    this.name = 'Type error';
}

export function ParamLengthException() {
    this.message = `You have got a wrong length of the param.`;
    this.name = 'Param length error';
}