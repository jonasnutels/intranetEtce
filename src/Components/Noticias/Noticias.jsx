import styles from './Noticias.module.css';
function Noticias() {
  return (
    <>
      <div className={styles.noticiasDestaques}>
        <h2>
          Cobertura jornalista realizada pela TV Cidadã é parabenizada durante
          III Congresso Internacional dos Tribunais de Contas
        </h2>

        <div className={styles.descricao}>
          <img
            src="https://www.tceal.tc.br/view/img/noticias/IMG04122023105951000000656ddb571899a.jpeg"
            alt=""
          />
          <p>
            “A nossa TV Cidadã é um dos nossos principais cases de sucesso, um
            exemplo disso é que estamos agora transmitindo esse evento para o
            Brasil todo”, destacou o presidente do Tribunal de Contas de
            Alagoas, conselheiro Fernando Toledo, sobre a brilhante apresentação
            e transmissão da TV Cidadã durante o III Congresso Internacional dos
            Tribunais de Contas (CITC), que aconteceu entre os dias 28 de
            novembro e 1º de dezembro, em Fortaleza....
          </p>
        </div>
      </div>

      <div className={styles.ultimasNoticias}>
        <div className={styles.container}>
          <h3 className={styles.titleNoticias}>Últimas Noticias</h3>
        </div>
        <div className={styles.noticiasCards}>
          <div className={styles.card}>
            <img src="https://www.tceal.tc.br/view/img/noticias/IMG02122023105347000000656b36ebe2b29.jpeg"></img>
            <p>
              Terceiro dia do III CITC: autoridades brasileiras e do exterior
              completam lista de palestrantes
            </p>
          </div>
          <div className={styles.card}>
            <img src="https://www.tceal.tc.br/view/img/noticias/IMG02122023105347000000656b36ebe2b29.jpeg"></img>
            <p>
              Terceiro dia do III CITC: autoridades brasileiras e do exterior
              completam lista de palestrantes
            </p>
          </div>
          <div className={styles.card}>
            <img src="https://www.tceal.tc.br/view/img/noticias/IMG02122023105347000000656b36ebe2b29.jpeg"></img>
            <p>
              Terceiro dia do III CITC: autoridades brasileiras e do exterior
              completam lista de palestrantes
            </p>
          </div>
          <div className={styles.card}>
            <img src="https://www.tceal.tc.br/view/img/noticias/IMG02122023105347000000656b36ebe2b29.jpeg"></img>
            <p>
              Terceiro dia do III CITC: autoridades brasileiras e do exterior
              completam lista de palestrantes
            </p>
          </div>
          <div className={styles.card}>
            <img src="https://www.tceal.tc.br/view/img/noticias/IMG02122023105347000000656b36ebe2b29.jpeg"></img>
            <p>
              Terceiro dia do III CITC: autoridades brasileiras e do exterior
              completam lista de palestrantes
            </p>
          </div>
          <div className={styles.card}>
            <img src="https://www.tceal.tc.br/view/img/noticias/IMG02122023105347000000656b36ebe2b29.jpeg"></img>
            <p>
              Terceiro dia do III CITC: autoridades brasileiras e do exterior
              completam lista de palestrantes
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Noticias;
