import React from "react";
import { useParams } from "react-router";
import "../css/ProductPage.css";
import Footer from "../Footer";
import Header from "../Header";
import Head from "../Head";

const ProductPage = () => {
  const params = useParams();

  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function produtoDados(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (erro) {
        setError("Um erro ocorreu");
      } finally {
        setLoading(false);
      }
    }

    produtoDados(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`);
  }, [params]);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;

  return (
    <p>
      <Header />
      <section className="product-page-container animeLeft">
        <Head
          title={`Porão Store | ${params.id}`}
          description={`Essa é a página referente ao produto ${produto.id}`}
        />
        <h1 className="title-product">{produto.nome}</h1>
        <p className="product-price">Preço: R$ {produto.preco}</p>
        <div className="product-page-content">
          {produto.fotos.map((foto) => (
            <img
              className="product-page-img"
              key={foto.titulo}
              src={foto.src}
              alt=""
            />
          ))}
        </div>
        <p className="product-desc"> Descrição do Produto</p>
        <p className="product-text">
          {produto?.descricao} Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Phasellus pulvinar congue enim, sed accumsan mauris
          cursus in. In hac habitasse platea dictumst. Pellentesque in egestas
          dui. Vivamus nec dui urna. Sed eu tortor sit amet magna consequat
          ornare. Suspendisse potenti. Aliquam sit amet tellus hendrerit,
          posuere urna ut, mattis dui. Suspendisse augue risus, euismod in
          efficitur sit amet, lobortis et ante. Fusce in nibh neque. Nullam
          dapibus, nisi aliquam mollis elementum, ante massa auctor nisi, sed
          accumsan erat est ut tellus. Vestibulum placerat porta tempus.
          Pellentesque ultricies ligula lacus, molestie congue mauris tristique
          eget. Vestibulum vitae sollicitudin nibh. Nam leo nisl, dapibus nec
          nisl ut, feugiat accumsan libero. Donec lorem dui, placerat vel justo
          vel, pulvinar semper nunc. In consequat mauris at nisl rhoncus
          feugiat.
        </p>
      </section>
      <Footer />
    </p>
  );
};

export default ProductPage;
