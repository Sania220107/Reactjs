import React from 'react';
import Laptop1 from '../../assets/Laptop1.png';
import Rating from '../../assets/Rating.png';
import Ratings from '../../assets/Ratings.png';
import Ratingss from '../../assets/Ratingss.png';
import Ratingsss from '../../assets/Ratingsss.png';

const LeaderboardsData = [
    {
        id: 1,
        img: Laptop1,
        title: 'Asus Zenbook UX-430 US',
        img1: Rating,
        subtitle: '21K Total Reviews',
        link: '#',
        delay: 0.2
    },
    {
        id: 2,
        img: Laptop1,
        title: 'Audio Technica ATH M20 BT',
        img1: Ratings,
        subtitle: '300K Total Reviews',
        link: '#',
        delay: 0.2
    },
    {
        id: 3,
        img: Laptop1,
        title: 'SK II - Anti Aging Cream',
        img1: Ratingss,
        subtitle: '89K Total Reviews',
        link: '#',
        delay: 0.2
    },
    {
        id: 4,
        img: Laptop1,
        title: 'Modena Juice Blender',
        img1: Ratingsss,
        subtitle: '871 Total Reviews',
        link: '#',
        delay: 0.2
    },
]
const Leaderboards = () => {
  return (
    <section>
        <div className='flex justify-center'>
            <h1>Most Sold in Ehya Store</h1>
        </div>
        <h5>This is the seciton about the data which product with most sold in Ehya Store.</h5>
        {LeaderboardsData.map((leader) => (
            <div>
            <div className='flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl'>
                <img className='col-span-1 text-4xl mb:4 drop-shadow mt-6' src={leader.img} />
                <div className='col-span-2 flex flex-col justify-between mt-7 mb-7'>
                    <h1 className='text-lg font-medium font-poppins drop-shadow'>{leader.title}</h1>
                    <img src={leader.img1} className='text-4xl drop-shadow w-[150px]'/>
                    <h1 className='text-sm drop-shadow'>{leader.subtitle}</h1>
                </div>
                <button>Read Reviews</button>
                <br />
                <button>Buy</button>
            </div>
        </div>
        ))}
        <div className='flex justify-center'>
            <div>
                <button>See full Leaderboards</button>
            </div>
        </div>
    </section>
  );
};

export default Leaderboards;