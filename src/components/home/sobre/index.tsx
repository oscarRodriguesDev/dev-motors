import styles from './styles.module.scss'

async function getData(){
    try{
   const res  = await fetch(`${process.env.URL_API}`)
   return res.json()
    }catch(error){
        console.log(error)
        return
    }
}

export async function Sobre() {

    const data = await getData();
 console.log(data.'about.description')


    return (
 
        <div className={styles.container}>  

            <section className={styles.sobre}>
                <h1 className={styles.titulo}>Sobre</h1>

                <div className={styles.conteudo}>
                    <div >
                       {/*  <p>{data.about}</p> */}
                    </div>

                    <div >
                        <img src="" alt="imagem representantiva" />
                    </div>

                </div>

            </section>


        </div>

    )
}