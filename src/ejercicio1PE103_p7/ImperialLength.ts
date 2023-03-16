/**
 * Clase ImperialLength para convertir números en el sistema imperial
 * @class
 */
export class ImperialLength{
    private _valor: number; //Pulgadas
    /**
     * Constructor de ImperialLength
     * @param valor Valor inicial en pulgadas de la clase
     */
    constructor(valor: number){
        this._valor = valor;
    }
    /**
     * Setter que pone el nuevo valor en la clase en pulgadas
     * @param nuevo Número que queremos que sea el nuevo valor
     */
    set_pulgadas(nuevo: number){
        this._valor = nuevo;
    }
    /**
     * Getter que devuelve el valor en pulgadas
     */
    get_pulgadas(): number{
        return this._valor;
    }

    /**
     * Setter que pone el nuevo valor que lo transforma de pies a pulgadas
     * @param nuevo Número que queremos que sea el nuevo valor
     */
    set_pies(nuevo: number){
        this._valor = 12 * nuevo;
    }
    /**
     * Getter que devuelve el valor de pulgadas a pies
     */
    get_pies(): number{
        return this._valor / 12;
    }

    /**
     * Setter que pone el nuevo valor que lo transforma de yardas a pulgadas
     * @param nuevo Número que queremos que sea el nuevo valor
     */
    set_yardas(nuevo: number){
        this._valor = 36 * nuevo;
    }
    /**
     * Getter que devuelve el valor de pulgadas a yardas
     */
    get_yardas(): number{
        return this._valor / 36;
    }

    /**
     * Setter que pone el nuevo valor que lo transforma de millas a pulgadas
     * @param nuevo Número que queremos que sea el nuevo valor
     */
    set_millas(nuevo: number){
        this._valor = 63360 * nuevo;
    }
    /**
     * Getter que devuelve el valor de pulgadas a millas
     */
    get_millas(): number{
        return this._valor / 63360;
    }
}