# 👻 THE_BACKROOMS_BOT_SHIRO

Bot de Discord que envía enlaces en el canal pero **solo visible para quien lo ejecuta** usando **slash commands**.

## 🎯 Características

- ✅ Comando slash `/link` que envía el link **en el canal pero solo lo ves tú**
- ✅ Los demás usuarios **NO ven el mensaje** (mensajes efímeros/ephemeral)
- ✅ Status personalizado: "NADA ES LO QUE PARECE"
- ✅ Gestión segura de tokens con `.env`
- ✅ Privacidad total: nadie más ve nada

## 📋 Requisitos

- Python 3.8+
- discord.py 2.3.2+
- python-dotenv

## 🚀 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/vnuno325-netizen/THE_BACKROOMS_BOT_SHIRO.git
   cd THE_BACKROOMS_BOT_SHIRO
   ```

2. **Crear entorno virtual**
   ```bash
   python -m venv venv
   
   # En Windows
   venv\Scripts\activate
   
   # En macOS/Linux
   source venv/bin/activate
   ```

3. **Instalar dependencias**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configurar el bot**
   - Copia `.env.example` a `.env`
   ```bash
   cp .env.example .env
   ```
   - Abre `.env` y añade tu token de Discord:
   ```
   DISCORD_TOKEN=tu_token_aqui
   ```

## 🎮 Uso

**Ejecutar el bot:**
```bash
python main.py
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

Para añadir más comandos slash, edita `main.py`:

```python
@bot.tree.command(name='nuevo_comando', description='Descripción del comando')
async def slash_nuevo_comando(interaction: discord.Interaction):
    await interaction.response.send_message("Mensaje solo para ti", ephemeral=True)
```

## 📞 Soporte

Si necesitas ayuda, consulta la [documentación de discord.py](https://discordpy.readthedocs.io/)

---

**Bot creado por:** vnuno325-netizen  
**Estado:** NADA ES LO QUE PARECE 👻  
**Link:** https://www.youtube.com/watch?v=NUVG5_yuYO8
