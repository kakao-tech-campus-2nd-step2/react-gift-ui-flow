import './CategorySection.css'

import { Link } from 'react-router-dom'

import { Image } from '@/components/common/Image'

import category01 from '../images/category01.png'


const CategorySection = () => {

    const categoryData = [
        {id: 1, img: category01, text: '생일', key: 'birthday'},
        {id: 2, img: category01, text: '졸업선물', key: 'graduation'},
        {id: 3, img: category01, text: '스몰럭셔리', key: 'small-luxury'},
        {id: 4, img: category01, text: '명품선물', key: 'luxury'},
        {id: 5, img: category01, text: '결혼/집들이', key: 'wedding'},
        {id: 6, img: category01, text: '따뜻한선물', key: 'warm-gifts'},
        {id: 7, img: category01, text: '가벼운선물', key: 'light-gifts'},
        {id: 8, img: category01, text: '팬심저격', key: 'fan-favorites'},
        {id: 9, img: category01, text: '교환권', key: 'vouchers'},
        {id: 10, img: category01, text: '건강/비타민', key: 'health-vitamins'},
        {id: 11, img: category01, text: '과일/한우', key: 'fruit-beef'},
        {id: 12, img: category01, text: '출산/키즈', key: 'children-kids'}
    ]

  return (
    <div className='categories'>
        {categoryData.map((category) => (
            <Link to={`/theme/${category.key}`} key={category.id} className='categoryContainer'>
                <Image
                    src={category.img}
                    alt={`category${category.id}`}
                    radius={20}
                    ratio={'square'}
                    width={90}
                    height={90}
                />
                <div className='categoryText'>{category.text}</div>
            </Link>
        ))}
    </div>
  )
}

export default CategorySection