FROM registry.cn-hangzhou.aliyuncs.com/thundersdata-public/node:git
COPY . /egg-template
WORKDIR /egg-template
CMD ["npm","start"]