# 📧 Integración de Backend para Formulario de Contacto

## 🎯 Estado Actual
El formulario de contacto está configurado con un **backend simulado** que funciona completamente. Los datos se validan, procesan y muestran feedback al usuario.

## 🔄 Cómo Sustituir con tu Backend Real

### 1. **Archivo a Modificar**
```
src/services/contactService.js
```

### 2. **Cambios Necesarios**

#### **Paso 1: Cambiar la URL**
```javascript
// CAMBIAR ESTA LÍNEA:
const BACKEND_URL = 'https://tu-backend.com/api/contact';

// POR TU ENDPOINT REAL:
const BACKEND_URL = 'https://mi-api-real.com/api/contact';
```

#### **Paso 2: Descomentar el Código Real**
En la función `sendContactForm`, **eliminar la simulación** y **descomentar el código real**:

```javascript
// ELIMINAR ESTA SIMULACIÓN:
// setTimeout(() => { ... }, 1000);
// console.log('📧 Datos enviados al backend (simulado):', formData);
// resolve({ success: true, message: 'Mensaje enviado correctamente', id: Math.random().toString(36).substr(2, 9) });

// DESCOMENTAR ESTE CÓDIGO REAL:
fetch(BACKEND_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
})
.then(response => {
  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }
  return response.json();
})
.then(data => resolve(data))
.catch(error => reject(error));
```

### 3. **Estructura de Datos Enviados**
Tu backend recibirá un objeto JSON con esta estructura:
```javascript
{
  "name": "Nombre del usuario",
  "email": "email@ejemplo.com", 
  "subject": "Asunto del mensaje",
  "message": "Contenido del mensaje"
}
```

### 4. **Respuesta Esperada del Backend**
Tu backend debe responder con:
```javascript
{
  "success": true,
  "message": "Mensaje enviado correctamente",
  "id": "identificador-unico" // opcional
}
```

### 5. **Manejo de Errores**
Si hay error, tu backend debe:
- Responder con status HTTP de error (400, 500, etc.)
- O enviar JSON con `success: false`

## 🛠️ Ejemplos de Backend

### **Node.js + Express**
```javascript
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Validar datos
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Todos los campos son requeridos' 
      });
    }
    
    // Enviar email (usando nodemailer, sendgrid, etc.)
    await enviarEmail({ name, email, subject, message });
    
    res.json({ 
      success: true, 
      message: 'Mensaje enviado correctamente',
      id: Date.now().toString()
    });
    
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error interno del servidor' 
    });
  }
});
```

### **PHP**
```php
<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $name = $data['name'] ?? '';
    $email = $data['email'] ?? '';
    $subject = $data['subject'] ?? '';
    $message = $data['message'] ?? '';
    
    // Validar y enviar email
    if (mail('tu-email@ejemplo.com', $subject, $message, "From: $email")) {
        echo json_encode([
            'success' => true,
            'message' => 'Mensaje enviado correctamente'
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'Error al enviar mensaje'
        ]);
    }
}
?>
```

## ✅ Funcionalidades Implementadas

- ✅ **Validación completa** de formulario
- ✅ **Estados de carga** (botón deshabilitado durante envío)
- ✅ **Feedback visual** (mensajes de éxito/error)
- ✅ **Limpieza automática** del formulario tras envío exitoso
- ✅ **Manejo de errores** robusto
- ✅ **Estilos responsive** para alertas y validaciones

## 🚀 Para Probar

1. Llena el formulario de contacto
2. Haz clic en "Enviar Mensaje"
3. Verás el estado de carga y luego el mensaje de éxito
4. Revisa la consola del navegador para ver los datos "enviados"

¡El formulario está **100% funcional** y listo para conectar con tu backend real!
