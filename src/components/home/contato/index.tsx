import styles from './styles.module.scss'

interface ContactProps {
    icone: string | any;
    titulo: string;
    description: string;
}

export function Contato({ icone, titulo, description }: ContactProps) {
    return (
        <section className={styles.conteudo}>
            <div className={styles.icon}>
                <span>{icone}&nbsp;&nbsp;{titulo}
                </span>
            </div>
            <div className={styles.description}>
                <p>{description}</p>
            </div>

        </section>
    )
}