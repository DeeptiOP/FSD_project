#!/bin/bash
set -e

echo "Installing dependencies in server folder..."
cd server
npm install
echo "Dependencies installed successfully!"
