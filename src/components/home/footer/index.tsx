import styles from './styles.module.scss'
export function Sobre() {
    return (

        <div className={styles.container}>
            <section className={styles.sobre}>

                <div>
                    <h1>Sobre</h1>
                    <div>
                        <p>Na AutoMaster, contamos com uma equipe de mecânicos qualificados e apaixonados pelo que fazem.
                            Nossa experiência e dedicação garantem que seu carro receba o melhor cuidado possível. Estamos sempre
                            atualizados com as últimas tecnologias e técnicas do setor automotivo.</p>
                    </div>

                    <div>
                        <img src="" alt="imagem representantiva" />
                    </div>
                </div>

            </section>

          
        </div>

    )
}