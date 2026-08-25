const { Client, GatewayIntentBits, ActivityType, SlashCommandBuilder } = require('discord.js');
const { REST } = require('discord.js');
const { Routes } = require('discord.js');
require('dotenv').config();

console.log('🚀 Iniciando bot...');

// Configurar intents
const intents = [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
  GatewayIntentBits.DirectMessages
];

// Crear cliente
const client = new Client({ intents });

// Evento: Bot listo
client.once('ready', async () => {
  console.log(`✓ Bot conectado como ${client.user.username}`);
  console.log(`✓ ID del bot: ${client.user.id}`);
  
  // Establecer status personalizado
  try {
    await client.user.setActivity('NADA ES LO QUE PARECE', { type: ActivityType.Playing });
    console.log('✓ Status establecido: NADA ES LO QUE PARECE');
  } catch (e) {
    console.log('⚠️ No se pudo establecer status:', e.message);
  }
  
  // Sincronizar comandos slash
  try {
    const commands = [
      new SlashCommandBuilder()
        .setName('link')
        .setDescription('Recibe un link solo visible para ti en el canal')
        .toJSON()
    ];

    const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);
    
    const data = await rest.put(
      Routes.applicationCommands(client.user.id),
      { body: commands }
    );
    
    console.log(`✓ ${data.length} comandos slash sincronizados`);
  } catch (error) {
    console.error(`⚠️ Error al sincronizar comandos:`, error.message);
  }
});

// Manejo de errores
client.on('error', error => {
  console.error('❌ Error del cliente:', error.message);
});

process.on('unhandledRejection', error => {
  console.error('❌ Rechazo no manejado:', error.message);
});

// Comando Slash: Enviar link
client.on('interactionCreate', async (interaction) => {
  try {
    if (!interaction.isChatInputCommand()) return;
    
    if (interaction.commandName === 'link') {
      const link = "https://www.youtube.com/watch?v=NUVG5_yuYO8";
      
      await interaction.reply({
        content: `🔗 **Link exclusivo:** ${link}`,
        ephemeral: true
      });
      console.log(`✓ Link enviado a ${interaction.user.username}`);
    }
  } catch (error) {
    console.error('❌ Error en interacción:', error.message);
    try {
      await interaction.reply({
        content: `❌ Error: ${error.message}`,
        ephemeral: true
      });
    } catch (e) {
      console.error('No se pudo responder:', e.message);
    }
  }
});

// Ejecutar bot
const TOKEN = process.env.DISCORD_TOKEN;

if (!TOKEN) {
  console.error("❌ Error: DISCORD_TOKEN no encontrado en variables de entorno");
  console.error("En Railway: Ve a Variables > Agregar DISCORD_TOKEN");
  process.exit(1);
}

console.log('🔐 Token encontrado, conectando a Discord...');

client.login(TOKEN).catch(error => {
  console.error('❌ Error al conectar:', error.message);
  process.exit(1);
});
