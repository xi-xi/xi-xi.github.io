FROM alpine:3.15
WORKDIR /tmp
RUN apk --update --no-cache add wget tar gcompat libgcc libstdc++\
    && rm -rf /var/cache/apk/* \
    && wget https://github.com/gohugoio/hugo/releases/download/v0.93.2/hugo_extended_0.93.2_Linux-64bit.tar.gz \
    && tar -axvf hugo_extended_0.93.2_Linux-64bit.tar.gz \
    && cp hugo /usr/local/bin
WORKDIR /root

