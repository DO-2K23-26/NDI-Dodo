import CardTopRight from './card_top_right';
import CardBottomLeft from './card_bottom_left';
export default function Card({ topright, botleft, text, title }) {

    return (<div className="flex justify-center items-center relative m-auto min-h-[40%] max-w-lg min-w-[90%] p-6 border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

        <CardTopRight image={topright} />
        <CardBottomLeft image={botleft} />
        <div className='self-start bg-black'> <div className='flex justify-center'></div>

        </div>
        <div className='self-center'><h5 className="container-lg text-[30px] max-w-lg mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5><p className="text-[30px] text-gray-700 dark:text-gray-400 ">{text}
        </p></div>

    </div>)
}