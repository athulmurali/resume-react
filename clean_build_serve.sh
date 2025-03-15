#!/bin/bash

# Function to print messages with corresponding status indicators
function print_status () {
  if [ $1 -eq 0 ]; then
    echo -e "[0;32m✔ $2[0m"
  else
    echo -e "[0;31m✖ $3[0m"
    exit 1
  fi
}

# Check and clean node_modules if it exists
if [ -d "node_modules" ]; then
  echo "node_modules directory exists. Cleaning up..."
  git clean -xdf
  print_status $? "Cleaned up untracked files" "Failed to clean untracked files"

  rm -rf node_modules
  print_status $? "node_modules removed" "Failed to remove node_modules"
else
  echo "node_modules directory does not exist. Skipping clean-up."
fi

# Reinstall dependencies
yarn install -f
print_status $? "Reinstalled dependencies" "Failed to reinstall dependencies"

# Build application
yarn build
print_status $? "Built the project" "Failed to build the project"

# Serve the built files
npx http-server ./build
print_status $? "Started http-server for ./build" "Failed to start http-server"

