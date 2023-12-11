import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { HashLoader } from 'react-spinners'
import './Table.css'
import ProductListLoader from './Loader/ProductListLoader'

const Products = () => {
  const mobile = localStorage.getItem('mobile')
  const email = localStorage.getItem('email')
  const role = localStorage.getItem('role')
  const [store, setstore] = useState([])
  const [search, setsearch] = useState("")
  const [deleteProductId, setdeleteProductrId] = useState()
  const [firstloading, setFIrstLoading] = useState(true)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (email === null && mobile === null) {
      navigate('/login')
      toast('Please login first')
    } else if (role === 'user') {
      navigate('/')
      toast('Something went wrong')
    } else {
      getData()
    }
    // eslint-disable-next-line
  }, [])

  const getData = () => {
    axios.get(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomProducts`)
      .then((res) => {
        const pdata = res.data
        const products = pdata.filter((pro) => pro.role !== 'admin')
        setstore(products)
        setFIrstLoading(false)
        setLoading(false)
      })
      .catch((err) => {
        toast.error(`${err.massage}`)
        setFIrstLoading(false)
        setLoading(false)
      })
  }

  const searchdata = store.filter(
    (pro) =>
      pro.title.toLowerCase().includes(search.toLowerCase()) ||
      pro.id.toLowerCase().includes(search.toLowerCase())
  )

  const deleteProduct = (id) => {
    setdeleteProductrId(id)
    setLoading(true)
    axios.delete(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomProducts/${id}`)
      .then(() => {
        toast.success('Product Deleted Successfully', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
        setstore(store.filter((pro) => pro.id !== id))
        setLoading(false)
      })
      .catch((err) => {
        toast.error(`${err.massage}`)
        setLoading(false)
      })
  }

  return (
    <div className=' dark:bg-black h-screen' >
      <div className=' dark:bg-black h-fit' >
        <AdminNavbar />
        {firstloading ? (
          <div className='dark:bg-black'>
            <ProductListLoader />
          </div>
        ) : (
          <>
            <div className='mt-16'>
              <div className="flex flex-col p-2 lg:p-3">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <div className="relative overflow-x-auto sm:rounded-lg p-3 lg:p-3 lg:pt-0">
                        <div className="flex items-center justify-between w-full" >
                          <div className='w-[30%] md:[15%] lg:w-[10%]'>
                            <button
                              type="button"
                              className="flex w-full justify-center rounded-md bg-blue-700 px-1 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                              onClick={() => navigate('/products/addproduct')}
                            >
                              Add Product
                            </button>
                          </div>
                          <div className='flex justify-end w-[57%] md:[15%] lg:w-[25%]'>
                            <label className="sr-only">Search</label>
                            <div className="relative w-full">
                              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                              </div>
                              <input
                                type="text"
                                className="block w-full sm:placeholder:truncate p-2 pl-10 text-sm text-gray-900 border border-blue-700 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                                placeholder="Search for title & id "
                                onChange={(e) => {
                                  setsearch(`${e.target.value}`)
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <small className='text-red-500 textwarningforproduct'>
                          *For Best Experience Use PC
                        </small>
                      </div>
                      <table className=" w-screen text-left text-sm font-light text-gray-500 dark:text-gray-400">
                        <thead className="font-medium text-xs text-gray-700 uppercase bg-blue-50 dark:bg-gray-700 dark:text-white sticky">
                          <tr >
                            <th scope="col" className="text-center py-4 w-[5%]">id</th>
                            <th scope="col" className="text-center py-4 w-[5%]">Image</th>
                            <th scope="col" className="text-center py-4 w-[25%] protable3">title</th>
                            <th scope="col" className="text-center py-4 w-[15%] protable1">category</th>
                            <th scope="col" className="text-center py-4 w-[8%] protable1">Mrp</th>
                            <th scope="col" className="text-center py-4 w-[8%] protable1">discount</th>
                            <th scope="col" className="text-center py-4 w-[8%] ">Sell Price</th>
                            <th scope="col" className="text-center py-4 w-[8%] protable2">stock</th>
                            <th scope="col" className="text-center py-4 w-[8%] protable1">rating</th>
                            <th scope="col" className="text-center py-4 w-[10%]">action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {searchdata.map((product, index) =>
                            <tr key={index} className="bg-white border-b text-center dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-600">
                              <td className="px-6 py-3 font-medium text-gray-900 dark:text-white truncate  w-[5%]" >
                                {product.id}
                              </td>
                              <td className="py-3 w-[5%] items-center">
                                <div className='w-fit text-center'>
                                  <img src={product.image} alt='Product' className="w-20 rounded-lg aspect-[10/7] object-contain border-[1px]" />
                                </div>
                              </td>
                              <td className="whitespace-nowrap text-ellipsis max-w-fit px-6 py-3 text-left overflow-hidden dark:text-gray-400 protable3">
                                <p className='w-[90%] whitespace-nowrap overflow-hidden text-ellipsis'>
                                  {product.title}
                                </p>
                              </td>
                              <td className="whitespace-nowrap px-6 py-3 overflow-hidden text-ellipsis dark:text-gray-400 protable1">
                                {product.category}
                              </td>
                              <td className="whitespace-nowrap px-6 py-3 dark:text-gray-400 protable1">
                                {product.mrp}
                              </td>
                              <td className="whitespace-nowrap px-6 py-3 dark:text-gray-400 protable1">
                                {product.discount}%
                              </td>
                              <td className="whitespace-nowrap px-6 py-3 dark:text-gray-400">
                                {product.price}
                              </td>
                              <td className="whitespace-nowrap px-6 py-3 dark:text-gray-400 protable2">
                                {product.availablestock}
                              </td>
                              <td className="whitespace-nowrap px-6 py-3 dark:text-gray-400 protable1">
                                {product.rating}
                              </td>
                              <td className="px-6 py-3">
                                <div className='flex justify-center'>
                                  <button type='button' className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => navigate(`/products/${product.id}`)}>Edit</button>
                                  {loading ? (
                                    <>
                                      {deleteProductId === product.id ? (
                                        <>
                                          <button type='button' className="w-[42px] h-[20px] font-medium text-red-600 dark:text-red-500 hover:underline mx-3" >
                                            <div className='flex justify-center items-center h-full'>
                                              <HashLoader
                                                color="#E33026"
                                                size={12}
                                              />
                                            </div>
                                          </button>
                                        </>
                                      ) : (
                                        <>
                                          <button type='button' className="font-medium text-red-600 dark:text-red-500 hover:underline mx-3">Delete</button>
                                        </>
                                      )}

                                    </>
                                  ) : (
                                    <>
                                      <button type='button' className="font-medium text-red-600 dark:text-red-500 hover:underline mx-3 " onClick={() => deleteProduct(product.id)}>Delete</button>
                                    </>
                                  )}
                                </div>
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )

}

export default Products
