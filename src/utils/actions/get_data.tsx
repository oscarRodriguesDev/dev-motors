export async function GetData(){
    
  try {
    const response = await fetch(`${process.env.API_URL}/objects/6654b918b6cce150ff098072?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata`)
 
    if(!response.ok){
     throw new Error('Error')
    }
    return response.json()
   } catch (error) {
     throw new Error('failed to fetch data')
   }
}