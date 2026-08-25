const { Client, GatewayIntentBits, ActivityType, SlashCommandBuilder } = require('discord.js');
const { REST } = require('discord.js');
const { Routes } = require('discord.js');
require('dotenv').config();

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
  await client.user.setActivity('NADA ES LO QUE PARECE', { type: ActivityType.Playing });
  console.log('✓ Status establecido: NADA ES LO QUE PARECE');
  
  // Sincronizar comandos slash
  try {
    const commands = [
      new SlashCommandBuilder()
        .setName('link')
        .setDescription('Recibe un link solo visible para ti en el canal')
    ].map(command => command.toJSON());

    const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);
    
    const data = await rest.put(
      Routes.applicationCommands(client.user.id),
      { body: commands }
    );
    
    console.log(`✓ ${data.length} comandos slash sincronizados`);
  } catch (error) {
    console.error(`❌ Error al sincronizar: ${error}`);
  }
});

// Comando Slash: Enviar link
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  
  if (interaction.commandName === 'link') {
    try {
      const link = "https://www.youtube.com/watch?v=NUVG5_yuYO8";
      
      await interaction.reply({
        content: `🔗 **Link exclusivo:** ${link}`,
        ephemeral: true
      });
      
    } catch (error) {
      await interaction.reply({
        content: `❌ Error: ${error.message}`,
        ephemeral: true
      });
    }
  }
});

// Ejecutar bot
const TOKEN = process.env.DISCORD_TOKEN;

if (!TOKEN) {
  console.error("❌ Error: DISCORD_TOKEN no encontrado en .env");
  process.exit(1);
}

client.login(TOKEN);
