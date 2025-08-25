import React from 'react'

const AddProducts = () => {
  return (
    <div className='max-w-md mx-auto bg-white rounded-l shadow-md p-6'>
        <h2 className='text-xl font-bold mb-4'>Add New Products!</h2>

        <form>
            <div>
                <label className='text-sm font-medium block text-gray-600 mb-2' htmlFor="">Product Name</label>
                <input type="text" name='name' placeholder='product 1 ' className='border border-gray-300 p-2 rounded mb-4 w-full'/>
                <label className='text-sm font-medium block text-gray-600 mb-2' htmlFor="">Price</label>
                <input type="text" name='price' placeholder='10.00' className='border border-gray-300 p-2 rounded mb-4 w-full'/>
                <label className='text-sm font-medium block text-gray-600 mb-2' htmlFor="">Image URL</label>
                <input type="text" name='image' placeholder='https://example.com/image.jpg' className='border border-gray-300 p-2 rounded mb-4 w-full'/>
                
            </div>
            <div>
                <label className='text-sm font-medium block text-gray-600 mb-2' htmlFor="">Category</label>
               <select className='border border-gray-300 p-2 rounded mb-4 w-full'>
                  <option value="">Choose a category</option>
                  <option value="fashion">Fashion</option>
                  <option value="gadgets">Gadgets</option>
                  <option value="bags">Bags</option>
                  <option value="shoes">Shoes</option>
               </select>
               
            </div>
             <button type='submit' className='bg-blue-500 hover:bg-blue-600 cursor-pointer text-white p-2 rounded'>Add Product</button>
        </form>
    </div>
  )
}

export default AddProducts