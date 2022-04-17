import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'Ground spices',
      imageUrl: 'https://www.hexafood.com/wp-content/uploads/elementor/thumbs/Ground-Spices-p29lid77snlrdj7ms8cv35rzm9yg6t5aaxf1whneps.jpg',
    },
    {
      id: 2,
      title: 'Whole spices',
      imageUrl: 'https://img1.10bestmedia.com/Images/Photos/379581/GettyImages-477756915_54_990x660.jpg',
    },
    {
      id: 3,
      title: 'Namkeens',
      imageUrl: 'https://cookingfromheart.com/wp-content/uploads/2020/11/Nippattu-7.jpg',
    },
    {
      id: 4,
      title: 'Pickles',
      imageUrl: 'https://images.ctfassets.net/3s5io6mnxfqz/1MH5olQ7SIFH2VDZPUo1Dw/55860d43a92da1e036572255f1ffcde8/AdobeStock_196719611.jpeg?fm=jpg&w=900&fl=progressive',
    },
    {
      id: 5,
      title: 'Papad',
      imageUrl: 'https://www.awesomecuisine.com/wp-content/uploads/2011/07/garlic-papads.jpg',
    },
  ];

  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
