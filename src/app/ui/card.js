import CardTopRight from './card_top_right';
import CardBottomLeft from './card_bottom_left';
export default function Card({ topright, botleft, text, title }) {
   return (
      <div className="flex justify-center items-center relative m-auto min-h-[40%] max-w-lg min-w-[90%] p-6 border-gray-200 rounded-lg shadow bg-white ">
         <CardTopRight image={topright} />
         <CardBottomLeft image={botleft} />
         <div className="self-start bg-black">
            {' '}
            <div className="flex justify-center"></div>
         </div>
         <div className="self-center">
            <h5 className="container-lg text-[30px] text-center max-w-lg mb-2 text-2xl font-bold tracking-tight text-white  dark:text-black">
               {title}
            </h5>
            <p className="text-[30px] text-gray-700 dark:text-black text-wrap">
               {text}
            </p>
         </div>
      </div>
   );
}
