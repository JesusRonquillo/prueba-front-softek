#!/bin/bash

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Inicio del proceso de deployment del Frontend${NC}"
echo "=================================================="

# Verificar si estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Error: No se encontró package.json. Ejecuta este script desde la raíz del proyecto frontend.${NC}"
    exit 1
fi

echo -e "${YELLOW}📦 Instalando dependencias...${NC}"
npm install

echo -e "${YELLOW}🧪 Ejecutando tests...${NC}"
npm run test:run

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Tests fallaron. No se puede continuar con el deployment.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Tests pasaron correctamente${NC}"

echo -e "${YELLOW}🔧 Compilando TypeScript y construyendo la aplicación...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build falló. Revisa los errores de compilación.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build completado exitosamente${NC}"

echo ""
echo -e "${BLUE}📁 Archivos de distribución generados en: ./dist${NC}"
echo -e "${BLUE}🌐 La aplicación está lista para deployment${NC}"
echo ""

echo -e "${YELLOW}Opciones de deployment disponibles:${NC}"
echo ""
echo -e "${GREEN}1. 🌐 Netlify (Recomendado para SPA)${NC}"
echo "   - Arrastra la carpeta 'dist' a https://app.netlify.com/drop"
echo "   - O usa Netlify CLI: netlify deploy --prod --dir=dist"
echo ""
echo -e "${GREEN}2. 📦 Vercel${NC}"
echo "   - npx vercel --prod"
echo "   - Configura build command: 'npm run build'"
echo "   - Configura output directory: 'dist'"
echo ""
echo -e "${GREEN}3. ☁️ AWS S3 + CloudFront${NC}"
echo "   - aws s3 sync dist/ s3://tu-bucket-name --delete"
echo "   - aws cloudfront create-invalidation --distribution-id TU_DISTRIBUTION_ID --paths '/*'"
echo ""
echo -e "${GREEN}4. 🐙 GitHub Pages${NC}"
echo "   - Habilita GitHub Pages en tu repositorio"
echo "   - Configura para usar la carpeta 'dist'"
echo ""

echo -e "${BLUE}💡 Recuerda:${NC}"
echo "- Configurar las variables de entorno en tu plataforma de deployment"
echo "- Actualizar la URL del backend en tu archivo de configuración"
echo "- Configurar redirects para SPA si es necesario"

echo ""
echo -e "${GREEN}🎉 Build completado! Tu aplicación está lista para deployment.${NC}" 