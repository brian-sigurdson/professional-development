FROM golang:latest
WORKDIR /myapp
COPY welcome.go .
RUN go mod init example/myapp
RUN go build -o welcome .
ENTRYPOINT ["./welcome"]
