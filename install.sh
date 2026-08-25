#!/bin/bash

# Script de instalación automática para THE_BACKROOMS_BOT_SHIRO

echo "👻 THE_BACKROOMS_BOT_SHIRO - Instalador Automático"
echo "=================================================="
echo ""

# Verificar si Python está instalado
if ! command -v python3 &> /dev/null; then
    echo "❌ Error: Python 3 no está instalado"
    echo "Descárgalo desde: https://www.python.org/downloads/"
    exit 1
fi

echo "✓ Python 3 detectado: $(python3 --version)"
echo ""

# Crear entorno virtual
echo "📦 Creando entorno virtual..."
python3 -m venv venv

# Activar entorno virtual
echo "🔌 Activando entorno virtual..."
if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
    # Windows
    source venv/Scripts/activate
else
    # macOS/Linux
    source venv/bin/activate
fi

echo "✓ Entorno virtual activado"
echo ""

# Actualizar pip
echo "⬆️  Actualizando pip..."
pip install --upgrade pip

# Instalar dependencias
echo ""
echo "📥 Instalando dependencias..."
pip install -r requirements.txt

echo ""
echo "✅ ¡Instalación completada!"
echo ""
echo "🚀 Para ejecutar el bot:"
echo ""
if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
    echo "   1. Abre PowerShell o CMD"
    echo "   2. Navega a la carpeta del bot"
    echo "   3. Ejecuta: venv\Scripts\activate"
    echo "   4. Luego: python main.py"
else
    echo "   1. source venv/bin/activate"
    echo "   2. python main.py"
fi
echo ""
echo "⚙️  Recuerda: Primero agrega tu DISCORD_TOKEN en el archivo .env"
echo ""
