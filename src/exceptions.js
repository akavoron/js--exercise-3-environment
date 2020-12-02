export function TypeException(rightType) {
    if (rightType) {
        this.message = `You should use a ${rightType} type in the param.`;
    }
    else {
        this.message = `You should use a correct type in the param.`;
    }
    this.name = 'Type error';
}

export function ParamLengthException() {
    this.message = `You have got a wrong length in one of the params.`;
    this.name = 'Param length error';
}

export function RangeException() {
    this.message = `One of the params is not in the range`;
    this.name = 'Params range error';
}

export function NumOfVariablesException() {
    this.message = `You are missing some variables`;
    this.name = 'Wrong number of variables';
}

export function ParamFormatException() {
    this.message = `One of the params has the wrong format`;
    this.name = 'Wrong format of params';
}