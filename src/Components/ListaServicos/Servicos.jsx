import styles from './Servicos.module.css';
import iconEtce from '../../assets/icon-etce.png';
function Servicos() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleServicos}>
          <h3>Lista de Servicos</h3>
        </div>

        <div className={styles.lista}>
          <img src={iconEtce} alt="" />
          <img src={iconEtce} alt="" />
          <img src={iconEtce} alt="" />
          <img src={iconEtce} alt="" />
          <img src={iconEtce} alt="" />
          <img src={iconEtce} alt="" />
          <img src={iconEtce} alt="" />
          <img src={iconEtce} alt="" />
          <img src={iconEtce} alt="" />
          <img src={iconEtce} alt="" />
          <img src={iconEtce} alt="" />
          <img src={iconEtce} alt="" />
          <img src={iconEtce} alt="" />
          <img src={iconEtce} alt="" />
          <img src={iconEtce} alt="" />
          <img src={iconEtce} alt="" />
          <img src={iconEtce} alt="" />
        </div>
        <div className={styles.containerDiario}>
          <div className={styles.titleServicos}>
            <h3>Diários Oficiais</h3>
            <div className={styles.lista}>
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Servicos;
