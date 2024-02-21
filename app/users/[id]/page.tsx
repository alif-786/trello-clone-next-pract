import React from 'react'

const IdPage = ({ params }: {
    params:{id:string}
}) => {
  return (
      <div className='text-amber-600 text-2xl font-bold'>Id:{params.id}</div>
  )
}

export default IdPage