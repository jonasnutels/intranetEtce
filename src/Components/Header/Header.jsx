import React, { useState } from 'react';
import styles from './Header.module.css';
import Banner from '../../assets/banner-limpo-acua-branco.png';
import LogoTce from '../../assets/logo-tce.png';
function Header() {
  const [localizador, setLocalizador] = useState('');

  const handleLocalizadorChange = (event) => {
    let inputValue = event.target.value;

    // Remove todos os caracteres não numéricos
    inputValue = inputValue.replace(/\D/g, '');

    // Adiciona a barra e o ano nos últimos 4 dígitos
    if (inputValue.length > 4) {
      inputValue = inputValue.slice(0, -4) + '/' + inputValue.slice(-4);
      if (inputValue.length > 10) {
        inputValue = inputValue.slice(1, 12);
      }
    }
    const year = inputValue.slice(-4);
    setLocalizador(inputValue);
  };
  return (
    <div className={styles.nav}>
      <img className={styles.banner} src={Banner} alt="" />
      <img className={styles.logotce} src={LogoTce} alt="" />
      <nav className={styles.headerNav}>
        <ul>
          <li>DIMOP</li>
          <li>SELIC</li>
          <li>TV CIDADÃ</li>
        </ul>
        <ul>
          <div className={styles.localizador}>
            <div className={styles.buscas}>
              <input
                type="text"
                placeholder="Localizador de Processos"
                value={localizador}
                onChange={handleLocalizadorChange}
              />
              <div className={styles.outrasOpcoes}>
                <p>Busca Avançada</p>
                <p>TC Digitalizados</p>
              </div>
            </div>
          </div>
          <button
            className={styles.buttonLocalizar}
            onClick={() => alert('Localizar processo: ' + year)}
          >
            Localizar
          </button>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
