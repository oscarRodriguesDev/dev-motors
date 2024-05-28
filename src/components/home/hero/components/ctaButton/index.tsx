
import styles from './styles.module.scss'
interface ButtoProps{
    text:string;
    url:string;
}
export function CtaButton({text,url}:ButtoProps){
    return (

        <div className={styles.button}>
                <a href={url}>{text}</a>
        </div>
    )
}