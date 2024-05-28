import { Services } from './components/services';
import styles from './styles.module.scss';





// Ajuste a assinatura da função para aceitar um objeto de props
export function Servicos() {
    return (
        <div className={styles.container}>

            <h1>Conheça nossos serviços</h1>

            <div className={styles.conteudo}>
              <Services/>
            </div>

        </div>
    );
}
