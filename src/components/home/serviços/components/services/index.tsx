import Image from "next/image"
import styles from './styles.module.scss'

interface Props {
    image: string;
    description: string;

}


export function Services() {
    return (
        <div className={styles.service}>
            <Image
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOh9XDsI3bv2bcrIamvjE0opwpF2zvS__wIRT7-kA3Tg&s'}
                alt='imagem do serviço'
                width={100}
                height={100}
            />
            <h4>Descrição do serviço</h4>

        </div>

    )
}