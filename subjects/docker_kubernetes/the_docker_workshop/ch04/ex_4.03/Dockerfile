FROM golang:latest AS builder
WORKDIR /myapp
COPY welcome.go .
RUN go mod init example/myapp
RUN go build -o welcome .

FROM scratch AS runner
WORKDIR /myapp
COPY --from=builder /myapp/welcome .
ENTRYPOINT [ "./welcome" ]