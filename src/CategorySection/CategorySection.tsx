import './CategorySection.css'

import { Image } from '@/components/common/Image'

import category01 from '../images/category01.png'


const CategorySection = () => {

    const categoryData = [
        {id: 1, img: category01, text: '생일'},
        {id: 2, img: category01, text: '졸업선물'},
        {id: 3, img: category01, text: '스몰럭셔리'},
        {id: 4, img: category01, text: '명품선물'},
        {id: 5, img: category01, text: '결혼/집들이'},
        {id: 6, img: category01, text: '따뜻한선물'},
        {id: 7, img: category01, text: '가벼운선물'},
        {id: 8, img: category01, text: '팬심저격'},
        {id: 9, img: category01, text: '교환권'},
        {id: 10, img: category01, text: '건강/비타민'},
        {id: 11, img: category01, text: '과일/한우'},
        {id: 12, img: category01, text: '출산/키즈'}
    ]

  return (
    <div className='categories'>
        {categoryData.map((category) => (
            <div key={category.id} className='categoryContainer'>
            <Image
                src={category.img}
                alt={`category${category.id}`}
                radius={20}
                ratio={'square'}
                width={90}
                height={90}
            />
            <div className='categoryText'>{category.text}</div>
        </div>
        ))}
    </div>
  )
}

export default CategorySection