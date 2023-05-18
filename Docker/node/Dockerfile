FROM node:lts-alpine

RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app
COPY . .

# 複製所有
COPY . .

# 依照指定版本安裝依賴
RUN npm install pnpm -g && pnpm install

# 建立生產版本
RUN pnpm run build

# 暴露的連接埠
EXPOSE 3000

# 啟動應用程式
CMD ["node", ".output/server/index.mjs"]