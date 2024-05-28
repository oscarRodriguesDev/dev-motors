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

                
                    <div className={styles.description}>
                    <h1 className={styles.titulo}>Sobre</h1>
                        <p>{description}</p>
                    </div>

                    <div className={styles.banner}>
                        <Image src={imagem} alt='imagem sobre' width={500} height={500} />
                    </div>

               
            </section>
        </div>
    );
}
