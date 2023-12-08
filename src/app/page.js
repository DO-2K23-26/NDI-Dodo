import Card from "./ui/card";
export default function Home() {
  return (
    <>
      <div className='nav'>
        <div className='fixed left-20 top-0 bottom-0 flex flex-col items-center justify-center'>
          <div
            id='slide-bar'
            className='grid grid-cols-1 divide-y rounded-md bg-zinc-800'
          >
            <button
              value='1'
              type='button'
              className='m-2 px-2 py-2 text-sm font-medium bg-cyan-900 rounded-full focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white'
            ></button>
            <button
              value='2'
              type='button'
              className='m-2 px-2 py-2 text-sm font-medium bg-cyan-50 rounded-full  focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white'
            ></button>
            <button
              value='3'
              type='button'
              className='m-2 px-2 py-2 text-sm font-medium bg-cyan-50 rounded-full focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white'
            ></button>
            <button
              value='4'
              type='button'
              className='m-2 px-2 py-2 text-sm font-medium bg-cyan-50 rounded-full hover:bg-gray-900 focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white'
            ></button>
          </div>
        </div>
      </div>
      <div className='corp'>


        <div className=' h-screen overflow-y-scroll snap-y snap-mandatory'>
          <div className=''>
            <div className='h-screen snap-center'>
              <Card botleft="/logo_ndi.png" topright="/logo_ndi.png" title="Le projet" text="L’objectif de ce projet porté par le Réseau Action Climat et le Bureau de la Nuit de l'Info 2023 est de sensibiliser sur le changement climatique, d’y voir plus clair sur les options qui existent et de réaliser qu’un futur positif est à notre portée . Pour cela, il faut déceler le vrai du faux à travers une activité ludique et rétablir la vérité grâce à des données venant de sources fiables . " />
            </div>

            <div className='h-96'></div>
            <div className='h-screen snap-center'>
              <Card title="L'effet de serre" text="Une des causes du changement climatique actuel est l’effet de serre. Ces gaz, présents dans l’atmosphère, forment une « barrière » autour de la Terre et piègent la chaleur à la surface de la Terre.
L’effet de serre est présent naturellement. Il permet ainsi à notre planète d’avoir une température moyenne de +15°C à sa surface, adaptée à la vie humaine.

Sans cet effet de serre, il ferait -18°C sur Terre et toute vie y serait impossible. Les gaz à effet de serre sont donc déterminant pour le maintien de la température moyenne globale, ce qui rend l’équilibre du système terrestre très fragile .
Cet équilibre est mis en danger par les émissions de gaz à effet de serre liées aux activités humaines.
" botleft="/fumee-incendie-feu.jpg" topright="/fumee-incendie-feu.jpg" />
            </div>
            <div className='h-96'></div>
            <div className='h-screen snap-center'>
              <Card title="Le climat" text="Le climat correspond aux conditions météorologiques moyennes (températures, ensoleillement, humidité de l’air, vitesse des vents, etc.) d’une région donnée, durant une longue période.
Il est influencé par la circulation atmosphérique (mouvement et déplacement de l’air) ;la circulation océanique (mouvement et déplacement de l’eau sur la planète) ; le relief ; les rayons du Soleil reçus par la surface terrestre.

Il y a donc changement climatique  lorsque ces conditions météorologiques moyennes commencent à changer, pour des raisons naturelles ou humaines.
" topright="/feu_foret.jpg" botleft="/feu_foret.jpg" />
            </div>
            <div className='h-96'></div>
            <div className='h-screen snap-center'>
              <Card title="Les principaux ges" text="Les principaux GES et leur production.
Le dioxyde de carbone (CO2 combustion des énergies fossiles)
Le méthane (CH4 élevage des ruminants )
Le protoxyde d’azote (N2Oengrais azotés ) 
 Les gaz fluorés (CFC, HFC, climatisation & extincteur)
" topright="/planete_temp.jpg" botleft="/planete_temp.jpg" />
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
