# 👻 THE_BACKROOMS_BOT_SHIRO - Discord Bot

**Bot de Discord que envía enlaces en el canal pero solo visible para quien lo ejecuta.**

## ✨ Características

- ✅ Comando slash `/link` - Link **solo visible para ti**
- ✅ Mensajes efímeros (ephemeral) - Privacidad total
- ✅ Status personalizado: "NADA ES LO QUE PARECE"
- ✅ **100% Node.js/JavaScript**
- ✅ Desplegable en Railway en 2 minutos

## 🚀 Despliegue en Railway

### Pasos rápidos:
1. Ir a [railway.app](https://railway.app)
2. Click "Start New Project" → "Deploy from GitHub"
3. Seleccionar: `vnuno325-netizen/THE_BACKROOMS_BOT_SHIRO`
4. Agregar variable de entorno:
   - `DISCORD_TOKEN` = Tu token de Discord
5. ¡Listo! Railway instala todo automáticamente ✅

## 🎮 Uso Local

```bash
# Instalar dependencias
npm install

# Ejecutar
npm start

# Desarrollo (con auto-reload)
npm run dev
```

## 📝 Configuración

Edita `.env`:
```env
DISCORD_TOKEN=tu_token_aqui
LINK_URL=https://www.youtube.com/watch?v=NUVG5_yuYO8
```

## 🛠️ Agregar comandos

Edita `main.js` y agrega en el bloque `interactionCreate`:

```javascript
if (interaction.commandName === 'tucomando') {
  await interaction.reply({
    content: "Tu respuesta aquí",
    ephemeral: true
  });
}
```

## 📚 Documentación

- [discord.js docs](https://discord.js.org/)
- [Railway docs](https://docs.railway.app/)

---

**Creado por:** vnuno325-netizen  
**Estado:** NADA ES LO QUE PARECE 👻
