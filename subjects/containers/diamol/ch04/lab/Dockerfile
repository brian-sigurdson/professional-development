FROM diamol/golang 

CMD ["/web/server"]
ENV USER=sixeyed
EXPOSE 80

WORKDIR /web
COPY index.html main.go /web/

RUN go build -o /web/server && chmod +x /web/server

