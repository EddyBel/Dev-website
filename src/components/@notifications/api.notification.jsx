import { toast } from 'sonner';
import { useStore } from '../../hook/store.context';
import { ATTEMPTS_API } from '../../web.config';
import { validateValues } from '../../utils/validations';

export function ApiNotification() {
  const { information } = useStore();

  // Crear una promesa que valide el estado information
  const promise = new Promise((resolve, reject) => {
    let time = 0; // Crear una variable para guardar el tiempo transcurrido

    const interval = setInterval(() => {
      time++;
      // Verificar si el estado information tiene algún valor
      //   Recuelve la promesa con el valor establecido
      // Limpia el intervalo
      const validateInformation = validateValues(information);
      if (validateInformation) {
        resolve({ name: 'information', status: true });
        clearInterval(interval);
      } else if (time >= ATTEMPTS_API) {
        // Si no tiene ningún valor después de 40 segundos, rechazar la promesa con el objeto deseado
        // Limpia el intervalo
        reject({ name: 'information', status: false });
        clearInterval(interval);
      }
    }, 1000); // 1000 milisegundos = 1 segundo
  });

  return toast.promise(promise, {
    loading: 'Solicitando API...',
    success: () => `información cargada correctamente`,
    error: 'No se pudo conectar al back-end',
  });
}
