#!/bin/bash
  
  BUILD_ID=DONTKILLME
  
  echo "pm2 starting"
  
  pm2 start ecosystem.config.js --env prod
  
  echo "pm2 started"