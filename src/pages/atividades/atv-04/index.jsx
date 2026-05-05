import { useState } from 'react';
import styles from './index.module.css';

export default function Atividade04() {
    const [quantidade, setQuantidade] = useState('');
    const [produto, setProduto] = useState('');
    const [lista, setLista] = useState([]);

    const handleAdicionar = (e) => {
        e.preventDefault();

        if (!quantidade || !produto) return;

        const novoItem = `${quantidade}x ${produto}`;

        setLista([...lista, novoItem]);

        // limpa os inputs
        setQuantidade('');
        setProduto('');
    };

    return (
        <div className={styles.container}>
            <h1>Atividade 4 - Lista de compra</h1>

            <form onSubmit={handleAdicionar} className={styles.formulario}>
                <input
                    type="number"
                    placeholder="Qtd"
                    value={quantidade}
                    onChange={(e) => setQuantidade(e.target.value)}
                    className={styles.qtd}
                />

                <input
                    type="text"
                    placeholder="Produto..."
                    value={produto}
                    onChange={(e) => setProduto(e.target.value)}
                    className={styles.produto}
                />

                <button type="submit" className={styles.botao}>
                    Adicionar
                </button>
            </form>

            <div className={styles.lista}>
                {lista.map((item, index) => (
                    <div key={index} className={styles.item}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}
