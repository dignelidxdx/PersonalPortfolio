// Servicio para manejar el envío de formularios de contacto
// Este archivo simula un backend - sustituye la URL por tu endpoint real

import config from '../config/config.js';

const BACKEND_URL = `${config.api.baseUrl}${config.api.endpoints.contact}`;

export const sendContactForm = (formData) => {
  return new Promise((resolve, reject) => {
    // Simular delay de red
    setTimeout(() => {
      try {
        // 🔄 SUSTITUIR ESTA SIMULACIÓN POR LLAMADA REAL AL BACKEND
        // fetch(BACKEND_URL, {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(formData),
        // })
        // .then(response => {
        //   if (!response.ok) {
        //     throw new Error(`Error ${response.status}: ${response.statusText}`);
        //   }
        //   return response.json();
        // })
        // .then(data => resolve(data))
        // .catch(error => reject(error));
        
        // SIMULACIÓN - ELIMINAR CUANDO TENGAS BACKEND REAL
        console.log('📧 Datos enviados al backend (simulado):', formData);
        
        // Simular respuesta exitosa
        resolve({
          success: true,
          message: 'Mensaje enviado correctamente',
          id: Math.random().toString(36).substr(2, 9)
        });
        
      } catch (error) {
        console.error('❌ Error enviando formulario:', error);
        reject(new Error('Error al enviar el mensaje. Por favor, intenta nuevamente.'));
      }
    }, 1000);
  });
};

// Función para validar datos del formulario
export const validateContactForm = (formData) => {
  const errors = {};
  
  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'El nombre debe tener al menos 2 caracteres';
  }
  
  if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Por favor ingresa un email válido';
  }
  
  if (!formData.subject || formData.subject.trim().length < 4) {
    errors.subject = 'El asunto debe tener al menos 4 caracteres';
  }
  
  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = 'El mensaje debe tener al menos 10 caracteres';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
