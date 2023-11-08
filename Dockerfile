# FROM node:lts-alpine
FROM keymetrics/pm2:18-alpine

# 設定工作目錄
WORKDIR /app

# 作者
# 複製 package.json 和 package-lock.json 至工作目錄
# COPY package*.json .
# COPY pnpm-lock.yaml .

# 複製所有
COPY . .

# 依照指定版本安裝依賴
# RUN npm install -g pnpm
# RUN npm cache clean --force
# RUN npm install -g pm2
# RUN pnpm install 

# 建立生產版本
# RUN pnpm run build
ENV TZ="Asia/Taipei"
# 暴露的連接埠
EXPOSE 3000

# 啟動應用程式
# CMD ["node", ".output/server/index.mjs"]

## 利用 PM2-runtime 來啟動 Nuxtjs service，並直接使用 env_prod 中的設定
CMD [ "pm2-runtime", "start", "ecosystem.config.js", "--env", "prod" ]
