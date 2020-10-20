import fetchData from '../../util/fetchData'


export default async function getList([...list]){
  let result = list.forEach(item => {
    switch(item){
      case 'upcoming':
        const upcoming = fetchData('upcoming')
        return upcoming
      case 'popular':
        const popular = fetchData('popular')
        return popular
      case 'top_rated':
        const top_rated = fetchData('top_rated')
        return top_rated
      default:
        return null  
    }
  })
  console.log(result)
  return result
} 