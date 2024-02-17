/* eslint-disable react/prop-types */

const ProductList = ({item}) => {
    // console.log(item)
    const TableStyle={
        borderRow:"border-2 border-white p-[0.5rem] bg-red-200 text-black "
     }
  return (
    <>

                <tr className='border-2'>
                    <th className={`${TableStyle.borderRow}`}>{item.id}</th>
                    <th className={`${TableStyle.borderRow} w-[300px]`}>{item.title}</th>
                    <th className={`${TableStyle.borderRow}`}>{item.description}</th>
                    <th className={`${TableStyle.borderRow}`}>{item.price}</th>
                    <th className={`${TableStyle.borderRow}`}>{item.category}</th>
                    <th className={`${TableStyle.borderRow}`}>{item.sold?"Sold":"Unsold"}</th>
                    <th className={`${TableStyle.borderRow}`}><img src={item.image} alt="" height={100} width={500}/></th>
                </tr>
            
       
    </>
  )
}

export default ProductList