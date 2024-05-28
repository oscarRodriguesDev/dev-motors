import styles from './styles.module.scss';
import Image from 'next/image';

// Defina uma interface para as props
interface SobreProps {
    description: string;
    imagem: string;
}

// Ajuste a assinatura da função para aceitar um objeto de props
export function Sobre({ description, imagem }: SobreProps) {
    return (
        <div className={styles.container}>
            <section className={styles.sobre}>
                <h1 className={styles.titulo}>Sobre</h1>

                <div className={styles.conteudo}>
                    <div>
                        <p>{description}</p>
                    </div>

                    <div>
                        <Image src={imagem} alt='imagem sobre' width={500} height={500} />
                    </div>

                </div>
            </section>
        </div>
    );
}
