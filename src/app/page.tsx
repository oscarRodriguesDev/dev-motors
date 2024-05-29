import { Contato } from "@/components/home/contato";
import { Hero } from "@/components/home/hero";
import { CtaButton } from "@/components/home/hero/components/ctaButton";
import { Service } from "@/components/home/serviços";
import { Sobre } from "@/components/home/sobre";
import { Submenu } from "@/components/home/submenu";
import { GetData } from "@/utils/actions/get_data";
import { HomeProps } from "@/utils/home.type";
import { Mail, Smartphone, Clock, MapPin } from "lucide-react";




export default async function Home() {
  const data: HomeProps = await GetData()
  const description: string = data.object.metadata.about.description
  const img_sobre: string = data.object.metadata.about.banner.url
  const imgHero: string = data.object.metadata.banner.url
  const descriptionHero: string = data.object.metadata.heading
  const textCTA: string = data.object.metadata.cta_button.title
  const urlCTA: string = data.object.metadata.cta_button.url
  const serviços = data.object.metadata.services
  const contato = data.object.metadata.contact



  return (
    <main>
      <Submenu />
      <Hero
        image={imgHero}
        titulo={descriptionHero}
        text_botão={textCTA}
        url={urlCTA}

      />
      <Sobre
        description={description}
        imagem={img_sobre}
      />

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', backgroundColor: '#eceff3', paddingTop: '2%' }}>
        {serviços.map((item) => (
          <Service
            key={item.image.url}
            image={item.image.url}
            description={item.description}
          />
        ))}
      </div>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', marginLeft: ' 25px auto', paddingLeft: '10%', paddingTop: '8%', paddingBottom: '5%' }}>


          <div style={{ backgroundColor: '#000', marginLeft: '18%', padding: '5%', height: '400px', borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px' }}>

            <Contato
              icone={<Mail />}
              titulo='Email'
              description={contato.email}
            />
            <Contato
              icone={<Smartphone />}
              titulo='Telefone'
              description={contato.phone}
            />

            <Contato
              icone={<Clock />}
              titulo='Horario de Funcionamento'
              description={contato.time}
            />
          </div>

          <div style={{ backgroundColor: '#000', padding: '5%', height: '400px', borderTopRightRadius: '8px', borderBottomRightRadius: '8px' }}>
            <Contato
              icone={<MapPin />}
              titulo='Adress'
              description={contato.adress}

            />
          </div>
        </div>

        <div style={{ width: '25%', margin: ' 5% auto', textAlign: 'center' }}>

          <CtaButton
            text={textCTA}
            url={urlCTA}
          />
        </div>


      </div>


    </main>
  );
}
//teste