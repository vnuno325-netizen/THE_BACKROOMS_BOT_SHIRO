import discord
from discord.ext import commands
import os
from dotenv import load_dotenv

# Cargar variables de entorno
load_dotenv()

# Configurar intents
intents = discord.Intents.default()
intents.message_content = True

# Crear bot
bot = commands.Bot(command_prefix='/', intents=intents)

# Evento: Bot listo
@bot.event
async def on_ready():
    """Se ejecuta cuando el bot está conectado y listo"""
    print(f'✓ Bot conectado como {bot.user}')
    print(f'✓ ID del bot: {bot.user.id}')
    
    # Establecer status personalizado
    await bot.change_presence(
        activity=discord.Activity(
            type=discord.ActivityType.playing,
            name="NADA ES LO QUE PARECE"
        )
    )
    print('✓ Status establecido: NADA ES LO QUE PARECE')
    
    # Sincronizar comandos slash
    try:
        synced = await bot.tree.sync()
        print(f'✓ {len(synced)} comandos slash sincronizados')
    except Exception as e:
        print(f'❌ Error al sincronizar: {e}')

# Comando Slash: Enviar link en el canal pero solo visible para quien lo ejecuta
@bot.tree.command(name='link', description='Recibe un link solo visible para ti en el canal')
async def slash_link(interaction: discord.Interaction):
    """Envía un link en el canal pero solo lo ve quien ejecuta el comando"""
    try:
        # Link de The Backrooms
        link = "https://www.youtube.com/watch?v=NUVG5_yuYO8"
        
        # Enviar mensaje en el canal pero SOLO visible para el usuario que lo ejecuta
        await interaction.response.send_message(f"🔗 **Link exclusivo:** {link}", ephemeral=True)
        
    except Exception as e:
        await interaction.response.send_message(f"❌ Error: {str(e)}", ephemeral=True)

# Ejecutar bot
if __name__ == "__main__":
    TOKEN = os.getenv('DISCORD_TOKEN')
    
    if not TOKEN:
        print("❌ Error: DISCORD_TOKEN no encontrado en .env")
        exit(1)
    
    bot.run(TOKEN)
