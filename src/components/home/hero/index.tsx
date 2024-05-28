import { CtaButton } from './components/ctaButton';
import styles from './styles.module.scss';


interface Props {
    image: string;
    titulo:string;
    text_botão:string
    url:string;
}



// Ajuste a assinatura da função para aceitar um objeto de props
export function Hero({image,titulo,text_botão,url}:Props) {
    return (
        //estilos in line abaixo
            <div className={styles.container} style={{backgroundImage:`url(${image})`, backgroundSize:'cover' , width:'100vwd',height:'30rem', backgroundPosition:'center'}}>
             {!titulo&&(
              <h1>um texto qualquer para ficar aqui</h1>
            )}
            <h1>{titulo}</h1>
           <CtaButton
           text={text_botão}
           url={url}
           />

         

            </div>
    );
}
