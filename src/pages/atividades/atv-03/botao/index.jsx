import styles from './index.module.css';

function Botao({ texto, aoClicar, tipo }) {
  return (
    <button 
      onClick={aoClicar}
      className={`${styles.btn} ${styles[tipo]}`}
    >
      {texto}
    </button>
  );
}

export default Botao;