export function TypeException(rightType) {
    this.message = `You should use a ${rightType} type in the param.`;
    this.name = 'Type error';
}

export function ParamLengthException() {
    this.message = `You have got a wrong length in one of the params.`;
    this.name = 'Param length error';
}

export function RangeException() {
    this.message = `One of the params is not in the range`;
    this.name = 'Param length error';
}