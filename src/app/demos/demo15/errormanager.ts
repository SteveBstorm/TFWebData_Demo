export function ErrorManager(error : any) {
  if(error.status == 404) console.log("Ressource introuvable")
}
