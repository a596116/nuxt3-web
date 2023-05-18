FROM node:lts-alpine

# 設定工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json 至工作目錄
COPY package.json /app/
COPY package-lock.json /app/

# 複製所有
COPY . /app

# 依照指定版本安裝依賴
RUN npm install -g pnpm
RUN pnpm install 

# 建立生產版本
RUN pnpm run build

# 暴露的連接埠
EXPOSE 3000

# 啟動應用程式
CMD ["node", ".output/server/index.mjs"]