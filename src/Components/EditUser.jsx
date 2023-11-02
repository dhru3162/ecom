import React, { useEffect, useState } from 'react'
import AdminNavBar from './AdminNavbar'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import Skeleton from 'react-loading-skeleton'
import Loader from './Loader/Loader'

const EditUser = () => {
  const role = sessionStorage.getItem('role')
  const email = sessionStorage.getItem('email')
  const mobile = sessionStorage.getItem('mobile')
  const [userData, setUserData] = useState({})
  const [firstLoading, setFirstLoading] = useState(true)
  const [loading, setLoading] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (email === null && mobile === null) {
      navigate('/login')
      toast('Please login first')
    } else if (role === 'user') {
      navigate('/')
      toast('Something went wrong')
    }
    getData()
    // eslint-disable-next-line
  }, [])

  const getData = () => {
    axios.get(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomLogin/${id}`)
      .then((res) => {
        setUserData(res.data)
        setFirstLoading(false)
      })
      .catch((err) => {
        toast.error(`${err.massage}`)
        setFirstLoading(false)
      })
  }

  const submit = () => {
    setLoading(true)
    axios.put(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomLogin/${id}`, userData)
      .then(() => {
        toast.success('User Details Edited Successfully', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
        navigate('/users')
        setLoading(false)
      })
      .catch((err) => {
        toast.error(`${err.massage}`)
        setLoading(false)
      })
  }

  return (
    <>
      <AdminNavBar />
      {firstLoading ? (
        <>
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 dark:bg-black">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight dark:text-gray-800">
                <Skeleton
                  width={'40%'}
                  height={'40px'}
                />
              </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6">


                <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    <Skeleton
                      width={'17%'}
                    />
                  </label>
                  <div className="mt-2">
                    <div
                      className="block w-full rounded-md border-0 text-gray-900 placeholder:text-gray-400  focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <Skeleton
                        height={'35px'}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    <Skeleton
                      width={'23%'}
                    />
                  </label>
                  <div className="mt-2">
                    <div
                      className="block w-full rounded-md border-0 text-gray-900 placeholder:text-gray-400  focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <Skeleton
                        height={'35px'}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    <Skeleton
                      width={'23%'}
                    />
                  </label>
                  <div className="mt-2">
                    <div
                      className="block w-full rounded-md border-0 text-gray-900 placeholder:text-gray-400  focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <Skeleton
                        height={'35px'}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    <Skeleton
                      width={'30%'}
                    />
                  </label>
                  <div className="mt-2">
                    <div
                      className="block w-full rounded-md border-0 text-gray-900 placeholder:text-gray-400  focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <Skeleton
                        height={'35px'}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    <Skeleton
                      width={'28%'}
                    />
                  </label>
                  <div className="mt-2">
                    <div
                      className="block w-full rounded-md border-0 text-gray-900 placeholder:text-gray-400  focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <Skeleton
                        height={'35px'}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    <Skeleton
                      width={'20%'}
                    />
                  </label>
                  <div className="mt-2">
                    <div
                      className="block w-full rounded-md border-0 text-gray-900 placeholder:text-gray-400  focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <Skeleton
                        height={'35px'}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mt-2">
                    <div
                      className="block w-full rounded-md border-0 text-gray-900 placeholder:text-gray-400  focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <Skeleton
                        height={'35px'}
                      />
                    </div>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </>
      ) : (
        <>
          {loading ? (
            <>
              <Loader />
            </>
          ) : (
            <>

              <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 dark:bg-black">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                  <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-blue-700">
                    Edit User
                  </h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                  <form className="space-y-6" onSubmit={submit}>


                    <div>
                      <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                        User ID
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          value={userData.id}
                          disabled
                          className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-0 dark:focus:ring-0"
                        />
                      </div>
                    </div>


                    <div>
                      <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                        First Name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          value={userData.fname}
                          required
                          className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-0 dark:focus:ring-0"
                          onChange={(e) => {
                            setUserData({ ...userData, fname: e.target.value })
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
                          value={userData.lname}
                          required
                          className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-0 dark:focus:ring-0"
                          onChange={(e) => {
                            setUserData({ ...userData, lname: e.target.value })
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
                          required
                          value={userData.mobile}
                          className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-0 dark:focus:ring-0"
                          onChange={(e) => {
                            setUserData({ ...userData, mobile: e.target.value })
                          }}
                        />
                      </div>
                    </div>



                    <div>
                      <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                        Email Address
                      </label>
                      <div className="mt-2">
                        <input
                          type="email"
                          value={userData.email}
                          required
                          className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-0 dark:focus:ring-0"
                          onChange={(e) => {
                            setUserData({ ...userData, email: e.target.value })
                          }}
                        />
                      </div>
                    </div>


                    <div>
                      <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                        Password
                      </label>
                      <div className="mt-2">
                        <input
                          type="password"
                          value={userData.pass}
                          disabled
                          className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-0 dark:focus:ring-0"
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Save Change
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </>
          )}

        </>
      )}
    </>
  )

}

export default EditUser
