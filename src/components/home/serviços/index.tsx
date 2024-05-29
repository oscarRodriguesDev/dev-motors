
import Image  from "next/image"
import styles from './styles.module.scss'

interface ServiceProps{
    image:string;
    description:string;
}
export function Service({image,description}: ServiceProps){
    return(
        <div className={styles.container}>

           <Image
           src={image}
           alt='imagem representativa do serviço'
           width={400}
           height= {400}
           quality={100}
           />
          <h4>{description}</h4>
        </div>
    )
}