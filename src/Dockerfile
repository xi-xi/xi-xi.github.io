FROM alpine:3.8
WORKDIR /tmp
RUN apk --update add wget tar \
    && rm -rf /var/cache/apk/* \
    && wget https://github.com/gohugoio/hugo/releases/download/v0.48/hugo_0.48_Linux-64bit.tar.gz \
    && tar -axvf hugo_0.48_Linux-64bit.tar.gz \
    && cp hugo /usr/local/bin
WORKDIR /root

