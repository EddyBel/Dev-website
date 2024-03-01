/**
 * Este componente controla si la variable pasada por parametro es una variable con contenido y retorna el componente correspondiente.
 * @example
 * <ValidatorVariable variable={textVariable} elseComponent={<h1>La variable esta vacia</h1>} >
 *  <h1>La variable es: {testVariable}</h1>
 * </ValidatorVariable>
 * @param {any} props.variable Variable a validar
 * @param {React.ReactNode} props.children Componente o Contenido a renderizar en caso de que la variable exista o tenga algun valor.
 * @param {React.ReactNode} props.elseComponent Componente o Contenido a renderizar en caso de que la variable sea ( null | undefinend).
 * @returns {React.ReactNode} Componente o Contenido a renderizar.
 */
export function ValidatorVariable({ variable, children, elseComponent }) {
  return !variable ? elseComponent ?? <></> : children;
}

/**
 * Este componente controla si la validación es verdadera o falsa y renderiza o retorna el componente correspondiente.
 * @example
 * <Validator validation={variable1 === variable2} elseComponent={<h1>Validación fallida</h1>} >
 * <h1>Validación exitosa</h1>
 * </Validator>
 * @param {boolean} props.validation Operación logica que determina que componente sera renderizado.
 * @param {React.ReactNode} props.children Componente o Contenido a renderizar en caso de que la operación logica sea verdadera.
 * @param {React.ReactNode} props.elseComponent Componente o Contenido a renderizar en caso de que la operación logica sea falsa.
 * @returns {React.ReactNode} Componente o Contenido a renderizar
 */
export function Validator({ validation, children, elseComponent }) {
  return validation ? children : elseComponent ?? <></>;
}
