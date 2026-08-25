@echo off
REM Script de instalación automática para THE_BACKROOMS_BOT_SHIRO (Windows)

echo.
echo 👻 THE_BACKROOMS_BOT_SHIRO - Instalador Automático (Windows)
echo ===========================================================
echo.

REM Verificar si Python está instalado
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Error: Python no está instalado
    echo Descárgalo desde: https://www.python.org/downloads/
    pause
    exit /b 1
)

echo ✓ Python detectado:
python --version
echo.

REM Crear entorno virtual
echo 📦 Creando entorno virtual...
python -m venv venv

REM Activar entorno virtual
echo 🔌 Activando entorno virtual...
call venv\Scripts\activate.bat

echo ✓ Entorno virtual activado
echo.

REM Actualizar pip
echo ⬆️  Actualizando pip...
python -m pip install --upgrade pip

REM Instalar dependencias
echo.
echo 📥 Instalando dependencias...
pip install -r requirements.txt

echo.
echo ✅ ¡Instalación completada!
echo.
echo 🚀 Para ejecutar el bot:
echo.
echo    1. Abre PowerShell o CMD en la carpeta del bot
echo    2. Ejecuta: venv\Scripts\activate
echo    3. Luego: python main.py
echo.
echo ⚙️  Recuerda: Primero agrega tu DISCORD_TOKEN en el archivo .env
echo.
pause
