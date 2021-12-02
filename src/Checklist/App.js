import { AppContainer, AppTitle, TopicContainer, TopicTitle, TopicImage, Checkbox, CheckboxContainer } from './styles.js';

import Dianteira from "./../images/dianteira.png"
import Traseira from "./../images/traseira.png"
import Interna from "./../images/interna.png"
import Esquerda from "./../images/esquerda.png"
import Direita from "./../images/direita.png"


function App() {

  const fields = [
    {
      title: "Motor",
      headTitle: "Dianteira",
      image: Dianteira,
      fields: [
        "Tampas",
        "Nivel Liquidos",
      ]
    },
    {
      title: "Funilaria",
      fields: [
        "Parafusos do Capô",
        "Alinhamento do Capô",
        "Alinhamento do Parachoque",
        "Alinhamento dos Paralamas",
        "Cor do Capô",
        "Cor do Parachoque",
        "Cor dos Paralamas",
      ]
    },
    {
      title: "Acabamento",
      fields: [
        "Farol",
        "Parabrisa",
      ]
    },
    {
      title: "Funilaria",
      headTitle: "Lateral Direita",
      image: Direita,
      fields: [
        "Alinhamento da Porta Dianteira",
        "Alinhamento da Porta Traseira",
        "Cor da Porta Dianteira",
        "Cor da Porta Traseira",
      ]
    },
    {
      title: "Acabamento",
      fields: [
        "Puxadores",
        "Borracha da Porta Dianteira",
        "Borracha da Porta Traseira",
      ]
    },
    {
      title: "Pneus",
      fields: [
        "Pneu Dianteiro",
        "Pneu Traseiro",
      ]
    },
    {
      title: "Funilaria",
      headTitle: "Lateral Esquerda",
      image: Esquerda,
      fields: [
        "Alinhamento da Porta Dianteira",
        "Alinhamento da Porta Traseira",
        "Cor da Porta Dianteira",
        "Cor da Porta Traseira",
      ]
    },
    {
      title: "Acabamento",
      fields: [
        "Puxadores",
        "Borracha da Porta Dianteira",
        "Borracha da Porta Traseira",
      ]
    },
    {
      title: "Pneus",
      fields: [
        "Pneu Dianteiro",
        "Pneu Traseiro",
      ]
    },
    {
      title: "Funilaria",
      headTitle: "Traseira",
      image: Traseira,
      fields: [
        "Parafusos do Porta Malas",
        "Alinhamento do Porta Malas",
        "Alinhamento do Parachoque",
        "Cor do Porta Malas",
        "Cor do Parachoque",
        "Parabrisa",
      ]
    },
    {
      title: "Acabamento",
      fields: [
        "Macaco",
        "Estepe",
        "Triangulo",
        "Tampão do Porta Malas",
      ]
    },
    {
      title: "Acabamento",
      headTitle: "Interno",
      image: Interna,
      fields: [
        "Banco Motorista",
        "Banco Passageiro",
        "Ajuste Eletrico",
        "Painel Superior",
        "Painel Inferior",
        "Pedais",
        "Banco Traseira",
        "Console Traseira",
      ]
    },
    {
      title: "Eletrica",
      fields: [
        "Buzina",
        "Limpador Dianteiro",
        "Limpador Traseiro",
        "Pisca Alerta (Sair do Carro)",
        "Farol Alto / Baixo",
        "Setas",
        "Luz de Ré",
        "Velocimetro",
        "Luz do Teto",
        "Ar Condicionado",
        "Teto Solar"
      ]
    },
  ]

  return (
    <AppContainer>
      {fields.map(item => {
        return (<TopicContainer>
          {!!item.image && <TopicImage src={item.image} />}
          {!!item.headTitle && <AppTitle>{item.headTitle}</AppTitle>}
          <TopicTitle>{item.title}</TopicTitle>

          <CheckboxContainer>
            {item.fields.map(field => <Checkbox label={field} />)}
          </CheckboxContainer>
        </TopicContainer>)
      })}
    </AppContainer>
  );
}

export default App;
