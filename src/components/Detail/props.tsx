import { database } from "@/database/database"

type PartParam = {
  urlPart: string
}

export function Props( { urlPart }: PartParam) {

  const curPart = database.find(item => item.name === urlPart)

  return (
    <div className="w-full h-full rounded-2xl bg-teal-950 space-y-5 pt-3 pl-3">
      <ul className="text-white text-2xl">Tratamento Térmico        
        {curPart?.props?.tratT.map((material, index) => (
          <li key={index} className="text-sm">{material}</li>
        ))}
      </ul>
      <ul className="text-white text-2xl">Tratamento Superficial        
        {curPart?.props?.tratS.map((material, index) => (
          <li key={index} className="text-sm">{material}</li>
        ))}
      </ul>
      <ul className="text-white text-2xl">Material        
        {curPart?.props?.material.map((material, index) => (
          <li key={index} className="text-sm">{material}</li>
        ))}
      </ul>
      <ul className="text-white text-2xl">Notas        
        {curPart?.props?.notes.map((material, index) => (
          <li key={index} className="text-sm">{material}</li>
        ))}
      </ul>
    </div>
  )
}