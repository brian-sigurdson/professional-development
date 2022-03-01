FROM golang:latest AS builder
WORKDIR /myapp
COPY main.go .
RUN go mod init example/myapp
ENV CGO_ENABLED=0
RUN go build -o main .

FROM alpine AS runner
WORKDIR /myapp
COPY --from=builder /myapp/main .
ENTRYPOINT [ "./main" ]