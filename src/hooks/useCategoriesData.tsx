import { ImageSourcePropType } from 'react-native';

export interface Category {
  image: ImageSourcePropType;
  text: string;
}

export const useCategoriesData = () => {
  const categories: Array<Category> = [
    {
      image: require('../../assets/images/shopping-bag.png'),
      text: 'Pick-up',
    },
    {
      image: require('../../assets/images/soft-drink.png'),
      text: 'Soft Drinks',
    },
    {
      image: require('../../assets/images/bread.png'),
      text: 'Bakery Items',
    },
    {
      image: require('../../assets/images/fast-food.png'),
      text: 'Fast Foods',
    },
    {
      image: require('../../assets/images/deals.png'),
      text: 'Deals',
    },
    {
      image: require('../../assets/images/coffee.png'),
      text: 'Coffee & Tea',
    },
    {
      image: require('../../assets/images/desserts.png'),
      text: 'Desserts',
    },
  ];

  return categories;
};
