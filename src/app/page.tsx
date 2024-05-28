import { Hero } from "@/components/home/hero";
import { Servicos } from "@/components/home/serviços";
import { Sobre } from "@/components/home/sobre";
import { Submenu } from "@/components/home/submenu";
import { GetData } from "@/utils/actions/get_data";
import { HomeProps } from "@/utils/home.type";
import Image from "next/image";



export default async function Home() {
  const data:HomeProps =  await GetData()
 const description:string = data.object.metadata.about.description
 const img_sobre:string =  data.object.metadata.about.banner.url
 const imgHero:string =  data.object.metadata.banner.url
 const descriptionHero:string=  data.object.metadata.heading
 const textCTA:string=data.object.metadata.cta_button.title
 const urlCTA:string = data.object.metadata.cta_button.url
  


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

      <Servicos/>

    </main>
  );
}
