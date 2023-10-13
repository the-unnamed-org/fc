FROM golang AS builder

WORKDIR /tmp/app/src
COPY hello.go .
RUN go build -o ../build/hello hello.go

FROM scratch

WORKDIR /opt/hello
COPY --from=builder /tmp/app/build .
ENTRYPOINT ["./hello"]
