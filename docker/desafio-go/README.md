# Desafio GO

## Objetivo

Publicar uma imagem no DockerHub contendo um programa em GO que quando executada imprima a mensagem: `Full Cycle Rocks!!`

A imagem deve ter menos de 2MB.

## Solução

Executando a imagem

```bash
docker run --rm  alanvictor/desafio-go
```

Arquivos fonte
- [Dockerfile](Dockerfile)
- [Aplicação em GO](hello.go)

Build

```bash
docker build -t ${username}/desafio-go .
```

Publish

```bash
docker push ${username}/desafio-go
```
