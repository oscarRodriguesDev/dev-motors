import styles from './styles.module.scss';
import Image from 'next/image';

interface Props {
    image: string;
}

// Ajuste a assinatura da função para aceitar um objeto de props
export function Hero({image}:Props) {
    return (
        //estilos in line abaixo
            <div style={{backgroundImage:`url(${image})`, backgroundSize:'cover' , width:'100vwd',height:'30rem', backgroundPosition:'center'}}>
                <h1>teste</h1>

            </div>

       
    );
}
