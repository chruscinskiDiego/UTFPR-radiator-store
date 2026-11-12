# Loja de radiadores — interface web

Projeto acadêmico que simula uma interface de e-commerce com HTML, CSS, JavaScript e Bootstrap.

## Recursos

- Catálogo e páginas de produtos.
- Carrinho de compras com estado local no navegador.
- Telas de login e cadastro como parte da interface.
- Componentes compartilhados de cabeçalho, rodapé e carrossel.

## Visualizar localmente

Sirva a pasta com um servidor estático. Uma opção, com Python instalado:

```bash
python3 -m http.server 8000
```

Abra http://localhost:8000. Não há package.json com um fluxo de build definido.

## Organização

- `index.html` e demais arquivos HTML: telas.
- `components/`: componentes de interface.
- `script/` e `app.js`: comportamento no navegador.
- `css/`: estilos.

## Escopo

Simulação de frontend com armazenamento local. Não inclui autenticação de servidor, banco remoto ou pagamentos reais. O diretório node_modules está versionado no histórico atual; isso é um ponto de manutenção, não uma etapa de instalação documentada.
