// Plantilla de configuración - COPIA este archivo como config.js
// Este archivo SÍ puede subirse a Git como referencia

const config = {
  // Backend API Configuration
  api: {
    baseUrl: 'https://tu-backend.com', // Cambia por tu URL real
    endpoints: {
      contact: '/api/contact',
      // Agrega más endpoints aquí según necesites
      // newsletter: '/api/newsletter',
      // auth: '/api/auth',
    }
  },
  
  // Otras configuraciones sensibles
  // apiKeys: {
  //   emailService: 'tu-api-key-aqui',
  //   analytics: 'tu-analytics-key',
  // },
  
  // Configuración de desarrollo vs producción
  isDevelopment: process.env.NODE_ENV === 'development',
  
  // Configuración de timeouts
  timeouts: {
    apiRequest: 10000, // 10 segundos
    formSubmission: 5000, // 5 segundos
  }
};

export default config;
