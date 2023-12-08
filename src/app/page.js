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
        <div className='grid grid-cols-12 gap-4 place-items'>
          <div className='col bg-blue-800'></div>
          <div className='col-span-11 h-screen overflow-y-scroll snap-y snap-mandatory'>
            <div className=''>
              <div className='h-screen snap-center'>
                <Card title="Le feu" text="Le climat correspond aux conditions météorologiques moyennes (températures, ensoleillement, humidité de l’air, vitesse des vents, etc.) d’une région donnée, durant une longue période.
Il est influencé par la circulation atmosphérique (mouvement et déplacement de l’air) ;la circulation océanique (mouvement et déplacement de l’eau sur la planète) ; le relief ; les rayons du Soleil reçus par la surface terrestre.

Il y a donc changement climatique  lorsque ces conditions météorologiques moyennes commencent à changer, pour des raisons naturelles ou humaines.
" topright="/feu_foret.jpg" botleft="/feu_foret.jpg" />
              </div>

              <div className='h-96 bg-slate-800'></div>
              <div className='h-96 bg-slate-800'></div>
              <div className='h-screen snap-center'>
                <img src='https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80' />
              </div>
              <div className='h-96 bg-slate-800'></div>
              <div className='h-96 bg-slate-800'></div>
              <div className='h-screen snap-center'>
                <img src='https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80' />
              </div>
              <div className='h-96 bg-slate-800'></div>
              <div className='h-96 bg-slate-800'></div>
              <div className='h-screen snap-center'>
                <img src='https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80' />
              </div>
              <div className='h-screen snap-center'>
                <img src='https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80' />
              </div>
              <div className='h-96 bg-slate-800'></div>
              <div className='h-96 bg-slate-800'></div>
              <div className='h-screen snap-center'>
                <img src='https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80' />
              </div>
              <div className='h-96 bg-slate-800'></div>
              <div className='h-96 bg-slate-800'></div>
              <div className='h-screen snap-center'>
                <img src='https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
