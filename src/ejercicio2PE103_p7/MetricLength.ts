import {ImperialLength} from "../ejercicio1PE103_p7/ImperialLength"
/**
 * Clase MetricLength para convertir números en el sistema Metric
 * @class
 */
export class MetricLength{
    private _valor: number; //centimetros
    /**
     * Constructor de MetricLength
     * @param valor Valor inicial en centimetros de la clase
     */
    constructor(valor: number){
        this._valor = valor;
    }
    /**
     * Setter que pone el nuevo valor en la clase en centimetros
     * @param nuevo Número que queremos que sea el nuevo valor
     */
    set_centimetros(nuevo: number){
        this._valor = nuevo;
    }
    /**
     * Getter que devuelve el valor en centimetros
     */
    get_centimetros(): number{
        return this._valor;
    }

    /**
     * Setter que pone el nuevo valor que lo transforma de metros a centimetros
     * @param nuevo Número que queremos que sea el nuevo valor
     */
    set_metros(nuevo: number){
        this._valor = 100 * nuevo;
    }
    /**
     * Getter que devuelve el valor de centimetros a metros
     */
    get_metros(): number{
        return this._valor / 100;
    }

    /**
     * Setter que pone el nuevo valor que lo transforma de kilometros a centimetros
     * @param nuevo Número que queremos que sea el nuevo valor
     */
    set_kilometros(nuevo: number){
        this._valor = 100000 * nuevo;
    }
    /**
     * Getter que devuelve el valor de centimetros a kilometros
     */
    get_kilometros(): number{
        return this._valor / 100000;
    }

    /**
     * Método que crea una clase imperial con los datos de la clase metric
     * @returns 
     */
    metricToImperial(): ImperialLength{
        let pulgadas = this._valor / 2.54
        let imperial = new ImperialLength(pulgadas)
        return imperial;
    }
    /**
     * Setter que pone el nuevo valor en la clase en pulgadas
     * @param nuevo Número que queremos que sea el nuevo valor
     */
    set_pulgadas(nuevo: number){
        this._valor = nuevo * 2.54;
    }
    /**
     * Getter que devuelve el valor en pulgadas
     */
    get_pulgadas(): number{
        return this.metricToImperial().get_pulgadas();
    }

    /**
     * Setter que pone el nuevo valor que lo transforma de pies a centimetros
     * @param nuevo Número que queremos que sea el nuevo valor
     */
    set_pies(nuevo: number){
        this._valor = nuevo * 30.48;
    }
    /**
     * Getter que devuelve el valor de centimetros a pies
     */
    get_pies(): number{
        return this.metricToImperial().get_pies();
    }

    /**
     * Setter que pone el nuevo valor que lo transforma de yardas a centimetros
     * @param nuevo Número que queremos que sea el nuevo valor
     */
    set_yardas(nuevo: number){
        this._valor = 91.44 * nuevo;
    }
    /**
     * Getter que devuelve el valor de centimetros a yardas
     */
    get_yardas(): number{
        return this.metricToImperial().get_yardas();
    }

    /**
     * Setter que pone el nuevo valor que lo transforma de millas a centimetros
     * @param nuevo Número que queremos que sea el nuevo valor
     */
    set_millas(nuevo: number){
        this._valor = 160934 * nuevo;
    }
    /**
     * Getter que devuelve el valor de centimetros a millas
     */
    get_millas(): number{
        return this.metricToImperial().get_millas();
    }

}