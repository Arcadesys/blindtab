#!/bin/bash

# Read from .env file in blindtab-react
cd blindtab-react

# Add each Firebase environment variable to Vercel
while IFS='=' read -r key value
do
  # Skip comments and empty lines
  [[ $key =~ ^#.*$ ]] && continue
  [[ -z $key ]] && continue
  
  # Only process Firebase variables
  if [[ $key == VITE_FIREBASE_* ]]; then
    # Remove any quotes from the value
    value=$(echo $value | tr -d '"')
    echo "Adding $key..."
    echo $value | vercel env add $key
  fi
done < .env

echo "Done! Now run 'vercel deploy' to apply changes." 