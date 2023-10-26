import React from 'react'
import Product from './Product'

function Products() {
  const productss=[
    {id:1,title:'Product One',desc:'this is product one'},
    {id:2,title:'Product Two',desc:'this is product two'},
    {id:3,title:'Product Three',desc:'this is product three'},
  ];

  return (
  <>
    <div className='row'>
     {productss.map((pro)=>{
        return <Product{...pro} key={pro.id}/>
      })
    }
</div>
</>
  )
}

export default Products