/**
 * Clase ImperialMass para convertir números en el sistema imperial
 * @class
 */
export class ImperialMass{
    private _valor: number; //Onzas
    /**
     * Constructor de ImperialMass
     * @param valor Valor inicial en onzas de la clase
     */
    constructor(valor: number){
        this._valor = valor;
    }
    /**
     * Setter que pone el nuevo valor en la clase en onzas
     * @param nuevo Número que queremos que sea el nuevo valor
     */
    set_onzas(nuevo: number){
        this._valor = nuevo;
    }
    /**
     * Getter que devuelve el valor en onzas
     */
    get_onzas(): number{
        return this._valor;
    }

    /**
     * Setter que pone el nuevo valor que lo transforma de libras a onzas
     * @param nuevo Número que queremos que sea el nuevo valor
     */
    set_libras(nuevo: number){
        this._valor = 16 * nuevo;
    }
    /**
     * Getter que devuelve el valor de onzas a libras
     */
    get_libras(): number{
        return this._valor / 16;
    }

    /**
     * Setter que pone el nuevo valor que lo transforma de centenas a onzas
     * @param nuevo Número que queremos que sea el nuevo valor
     */
    set_centenas(nuevo: number){
        this._valor = 1792 * nuevo;
    }
    /**
     * Getter que devuelve el valor de onzas a centenas
     */
    get_centenas(): number{
        return this._valor / 1792;
    }

    /**
     * Setter que pone el nuevo valor que lo transforma de toneladas a onzas
     * @param nuevo Número que queremos que sea el nuevo valor
     */
    set_toneladas(nuevo: number){
        this._valor = 35270 * nuevo;
    }
    /**
     * Getter que devuelve el valor de onzas a toneladas
     */
    get_toneladas(): number{
        return this._valor / 35270;
    }
}