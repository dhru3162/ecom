import React, { useEffect, useState } from 'react'
import AdminNavBar from './AdminNavbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import Loader from './Loader/Loader'

const AddUser = () => {
  const role = localStorage.getItem('role')
  const email = localStorage.getItem('email')
  const mobile = localStorage.getItem('mobile')
  const navigate = useNavigate()
  const [userdata, setuserdata] = useState({ fname: "", lname: "", mobile: "", email: "", signup: false, pass: '', role: 'user' })
  const [existuser, setexistuser] = useState([])
  const [err, seterr] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (email === null && mobile === null) {
      navigate('/login')
      toast('Please login first')
    } else if (role === 'user') {
      navigate('/')
      toast('Something went wrong')
    }
    existlist()
    // eslint-disable-next-line
  }, [])

  const existlist = async () => {
    await axios.get(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomLogin`)
      .then((res) => {
        setexistuser(res.data)
      })
      .catch((err) => {
        alert(err.message)
        navigate('/')
      })
  }

  const check = () => {
    let error = {}

    // eslint-disable-next-line 
    existuser.map((data) => {
      if (data.mobile === userdata.mobile) {
        error.mobile = 'Mobile Number Already Exists'
      }
      if (data.email === userdata.email) {
        error.email = 'Email Already Exists'
      }
    })

    seterr(error)
    return Object.keys(error).length === 0
  }

  const submit = (e) => {
    setLoading(true)
    e.preventDefault()
    // console.log(userdata)
    if (check()) {
      axios.post(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomLogin`, userdata)
        .then(() => {
          toast.success('User Added')
          navigate('/users')
          setLoading(false)
        })
        .catch((err) => {
          toast.error(`${err.massage}`)
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }

  return (
    <div className='dark:bg-black h-screen'>
      <AdminNavBar />
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <div className='dark:bg-black h-fit mt-16'>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
                  Add New User
                </h2>
              </div>
              <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={submit}>

                  <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                      First Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        required
                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-0 dark:focus:ring-0"
                        onChange={(e) => {
                          setuserdata({ ...userdata, fname: e.target.value })
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                      Last Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        required
                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-0 dark:focus:ring-0"
                        onChange={(e) => {
                          setuserdata({ ...userdata, lname: e.target.value })
                        }}
                      />
                    </div>
                  </div>


                  <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                      Mobile Number
                    </label>
                    <div className="mt-2">
                      <input
                        type="number"
                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-0 dark:focus:ring-0"
                        onChange={(e) => {
                          setuserdata({ ...userdata, mobile: e.target.value })
                          seterr({ ...err, mobile: '' })
                        }}
                      />
                      <small><span className='text-red-600'>{err.mobile}</span></small>
                    </div>
                  </div>



                  <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                      Email Address
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-0 dark:focus:ring-0"
                        onChange={(e) => {
                          setuserdata({ ...userdata, email: e.target.value })
                          seterr({ ...err, email: '' })
                        }}
                      />
                      <small><span className=' text-red-600'>{err.email}</span></small>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        required
                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-0 dark:focus:ring-0"
                        onChange={(e) => {
                          setuserdata({ ...userdata, pass: e.target.value })
                        }}
                      />
                    </div>
                  </div>


                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"

                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )

}

export default AddUser
