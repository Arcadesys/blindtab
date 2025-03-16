#!/bin/bash

# Debug Firebase Production Issues
# This script helps deploy and debug Firebase issues in production

# Set colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔍 BlindTab Firebase Debug Helper${NC}"
echo -e "${YELLOW}This script will help you debug Firebase issues in production${NC}"
echo ""

# Check if git status is clean
if [[ -n $(git status -s) ]]; then
  echo -e "${YELLOW}⚠️  You have uncommitted changes. Consider committing them first.${NC}"
  echo -e "Run: ${GREEN}git add . && git commit -m \"Add Firebase debug utilities\"${NC}"
  echo ""
fi

# Build the project
echo -e "${BLUE}📦 Building project...${NC}"
npm run build

if [ $? -ne 0 ]; then
  echo -e "${RED}❌ Build failed. Fix the errors and try again.${NC}"
  exit 1
fi

echo -e "${GREEN}✅ Build successful!${NC}"
echo ""

# Deploy to production
echo -e "${BLUE}🚀 Deploying to production...${NC}"
echo -e "${YELLOW}This will deploy the debug version to your production environment.${NC}"
read -p "Continue? (y/n) " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
  # Deploy using Vercel
  echo -e "${BLUE}Deploying with Vercel...${NC}"
  npx vercel --prod
  
  if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Deployment failed. Check the errors above.${NC}"
    exit 1
  fi
  
  echo -e "${GREEN}✅ Deployment successful!${NC}"
  echo ""
  
  # Instructions for debugging
  echo -e "${BLUE}🔧 Debugging Instructions:${NC}"
  echo -e "1. Open your production site in Chrome"
  echo -e "2. Open Chrome DevTools (F12 or Right-click > Inspect)"
  echo -e "3. Go to the Console tab"
  echo -e "4. Run: ${GREEN}window.runFirebaseDebug()${NC}"
  echo -e "5. Check the detailed debug report in the console"
  echo -e ""
  echo -e "${YELLOW}Look for these common issues:${NC}"
  echo -e "- Unauthorized domain (add your domain to Firebase Console > Authentication > Sign-in method > Authorized domains)"
  echo -e "- CORS issues (check if your domain is properly configured)"
  echo -e "- Network connectivity problems"
  echo -e "- Missing Firestore indexes"
  echo -e ""
  echo -e "${BLUE}Don't forget to commit your changes:${NC}"
  echo -e "${GREEN}git add . && git commit -m \"Add Firebase debug utilities\"${NC}"
else
  echo -e "${YELLOW}Deployment cancelled.${NC}"
fi 