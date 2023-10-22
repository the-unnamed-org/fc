# Git

## Assinatura de commits

### GPG

#### Listar as chaves GPG

```bash
gpg --list-secret-key --keyid-form LONG 
```

#### Criar uma nova chave

```bash
gpg --full-generate-key
```
Opções: 
- Tipo: RSA 
- Tamanho: 4096 bits
- **Lembrar de usar o e-mail PRIVADO do [github](https://github.com/settings/emails)**

#### Pegar a chave pública

```bash
# listar as chaves para buscar o id da chave gerada na etapa anterior
gpg --list-secret-key --keyid-form LONG
# exportar chave pública p/ cadastrar no github
gpg --armor --export ${iddachave}
```

### GitHub

#### Adicionar chave pública a conta

Acessar [menu](
https://github.com/settings/keys) `Settings` ->  `SSH and GPG keys`. Na opção GPG Keys tem um botão **New GPG Key**


### Git (terminal)

#### Habilitar assinatura de commits

```bash
# listar as chaves para buscar o id da chave gerada na etapa anterior
gpg --list-secret-key --keyid-form LONG
# config da chave
git config --global user.signingkey ${ID}
```

```bash
# também é necessário adicionar a seguinte linha na config do bash 
# ex: vim ~/.bash_profile OU vim ~/.bash_rc OU vim ~/.zsh_rc 
export GPG_TTY=$(tty)
```

```bash
# habilitar a assinatura por repositório
git config commit.gpgsign true
# habilitar a assinatura por padrão para todos os repositórios
git config --global commit.gpgsign true
git config --global tag.gpgSign true
```
