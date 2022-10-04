class Display {
    constructor(displayPreviewValue, displayActualValue){
        this.displayPreviewValue = displayPreviewValue;
        this.displayActualValue = displayActualValue;
        this.calculator = new Calculator();
        this.typeOperation = undefined;
        this.valActual = '';
        this.valPrev = '';
        this.operators = {
            add: '+',
            substract: '-',
            multiply: 'x',
            divide: '/'
        }
    }

    deleteNumber() {
        this.valActual = this.valActual.toString().slice(0,-1);
        this.printValues();
    }

    clean() {
        this.valActual = '';
        this.valPrev = '';
        this.typeOperation = undefined;
        this.printValues();
    }

    compute(type) {
        
        this.typeOperation !== 'equal' && this.operate();
        this.typeOperation = type;
        this.valPrev = this.valActual || this.valPrev;
        this.valActual = '';
        this.printValues();
    }

    addNumber(number) {
        if (number === '.' && this.valActual.includes('.')) return
        this.valActual = this.valActual.toString() + number.toString();
        this.printValues();
    }

    printValues() {
        this.displayActualValue.textContent = this.valActual;
        this.displayPreviewValue.textContent = `${this.valPrev} ${this.operators[this.typeOperation] || ''}`;
    }

    operate() {
        const valPrev = parseFloat(this.valPrev);
        const valActual = parseFloat(this.valActual);
        if (isNaN(valActual) || isNaN(valPrev)) return
        this.valActual = this.calculator[this.typeOperation](valPrev, valActual);
    }
}

