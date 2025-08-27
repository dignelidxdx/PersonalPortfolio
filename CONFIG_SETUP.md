# 🔐 Configuración Segura del Backend

## 📁 Archivos Creados

### **1. Archivo de Configuración Principal**
```
src/config/config.js
```
**⚠️ IMPORTANTE**: Este archivo está en `.gitignore` y NO se sube a Git.

### **2. Archivo de Plantilla**
```
src/config/config.example.js
```
**✅ SEGURO**: Este archivo SÍ se sube a Git como referencia.

## 🛠️ Cómo Configurar

### **Paso 1: Editar tu Configuración**
Abre `src/config/config.js` y cambia:

```javascript
const config = {
  api: {
    baseUrl: 'https://tu-backend-real.com', // ← Cambia esto
    endpoints: {
      contact: '/api/contact',
    }
  }
};
```

### **Paso 2: Agregar API Keys (Opcional)**
Si necesitas API keys, descomenta y agrega:

```javascript
apiKeys: {
  emailService: 'tu-api-key-real',
  analytics: 'tu-analytics-key',
},
```

## 🔒 Seguridad Implementada

### **✅ Archivo en .gitignore**
```gitignore
# Configuration files with sensitive data
src/config/config.js
```

### **✅ Separación de Configuración**
- **config.js**: Datos reales (privado)
- **config.example.js**: Plantilla (público)

### **✅ Importación Centralizada**
```javascript
// contactService.js usa la configuración
import config from '../config/config.js';
const BACKEND_URL = `${config.api.baseUrl}${config.api.endpoints.contact}`;
```

## 🚀 Ventajas

1. **🔐 Seguridad**: URLs y API keys no se suben a Git
2. **🔄 Flexibilidad**: Fácil cambio entre desarrollo/producción
3. **📝 Documentación**: Plantilla para otros desarrolladores
4. **🎯 Centralizado**: Una sola fuente de configuración

## 📋 Para Nuevos Desarrolladores

1. Clonar el repositorio
2. Copiar `config.example.js` como `config.js`
3. Editar `config.js` con sus propios endpoints
4. ¡Listo para desarrollar!

## ⚡ Estado Actual

El formulario de contacto ahora usa la configuración centralizada y está listo para tu backend real.
