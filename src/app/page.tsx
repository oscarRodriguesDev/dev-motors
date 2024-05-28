import { Hero } from "@/components/home/hero";
import { Sobre } from "@/components/home/sobre";
import { Submenu } from "@/components/home/submenu";
import { GetData } from "@/utils/actions/get_data";
import { HomeProps } from "@/utils/home.type";
import Image from "next/image";



export default async function Home() {
  const data:HomeProps =  await GetData()
 const description:string = data.object.metadata.about.description
 const img_sobre:string =  data.object.metadata.banner.url
 const imgHero:string =  data.object.metadata.banner.url
  


  return ( 
    <main>
      <Submenu />
      <Hero
      image={imgHero}
      />
      <Sobre
      description={description}
      imagem={img_sobre}
      />

    </main>
  );
}
