# 👻 THE_BACKROOMS_BOT_SHIRO

Bot de Discord que envía enlaces en el canal pero **solo visible para quien lo ejecuta** usando **slash commands**.

## 🎯 Características

- ✅ Comando slash `/link` que envía el link **en el canal pero solo lo ves tú**
- ✅ Los demás usuarios **NO ven el mensaje** (mensajes efímeros/ephemeral)
- ✅ Status personalizado: "NADA ES LO QUE PARECE"
- ✅ Gestión segura de tokens con `.env`
- ✅ Privacidad total: nadie más ve nada
- ✅ **Totalmente convertido a Node.js/JavaScript**

## 📋 Requisitos

- Node.js 18.x o superior
- npm o yarn

## 🚀 Instalación Local

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/vnuno325-netizen/THE_BACKROOMS_BOT_SHIRO.git
   cd THE_BACKROOMS_BOT_SHIRO
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar el bot**
   - Abre `.env` y añade tu token de Discord:
   ```
   DISCORD_TOKEN=tu_token_aqui
   ```

## 🎮 Uso

**Ejecutar el bot localmente:**
```bash
npm start
```

**Para desarrollo (con auto-reload):**
```bash
npm run dev
```

**Comandos disponibles:**

| Comando | Descripción |
|---------|------------|
| `/link` | Recibes el link en el canal pero **solo tú lo ves** |

### ¿Cómo funciona?
1. El usuario escribe `/link` en el canal (slash command)
2. El bot envía el link en el canal
3. ⚠️ **Solo el usuario que ejecutó el comando lo ve**
4. Los demás usuarios **no ven nada**

## 🚀 Despliegue en Railway

### Opción 1: Desde el navegador (más fácil)
1. Ir a [railway.app](https://railway.app)
2. Click en "Start New Project"
3. Click en "Deploy from GitHub"
4. Selecciona este repositorio
5. Railway detectará automáticamente que es Node.js
6. **Agregar variable de entorno:**
   - `DISCORD_TOKEN` = Tu token de Discord
7. El bot se desplegará automáticamente ✅

### Opción 2: Con Railway CLI
```bash
npm install -g @railway/cli
railway login
railway link
railway up
```

## 🔐 Seguridad

- **NUNCA** compartas tu `.env` o token
- Usa `.env` para guardar información sensible
- El archivo `.gitignore` protege tus datos
- Mensajes efímeros = privacidad total en el canal

## 📝 Configuración

Edita `.env` para personalizar:

```env
DISCORD_TOKEN=tu_token_aqui
LINK_URL=https://www.youtube.com/watch?v=NUVG5_yuYO8
```

## 🛠️ Desarrollo

Para añadir más comandos slash, edita `main.js`:

```javascript
if (interaction.commandName === 'nuevo_comando') {
  await interaction.reply({
    content: "Mensaje solo para ti",
    ephemeral: true
  });
}
```

## 📞 Soporte

Si necesitas ayuda, consulta la [documentación de discord.js](https://discord.js.org/)

---

**Bot creado por:** vnuno325-netizen  
**Estado:** NADA ES LO QUE PARECE 👻  
**Link:** https://www.youtube.com/watch?v=NUVG5_yuYO8

**Migrado a Node.js/JavaScript:** 2026-08-25
