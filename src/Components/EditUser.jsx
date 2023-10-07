import React, { useEffect, useState } from 'react'
import AdminNavBar from './AdminNavbar'
import PageNotFound from './PageNotFound'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import logo from './logo.png'
import axios from 'axios'
import { toast } from 'react-toastify'
import Skeleton from 'react-loading-skeleton'
import Loader from './Loader/Loader'

const EditUser = () => {
  const role = sessionStorage.getItem('role')
  const [collapse, setcollapse] = useState(true)
  const [userData, setUserData] = useState({})
  const [firstLoading, setFirstLoading] = useState(true)
  const [loading, setLoading] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
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

  if (role === 'admin') {
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
  } else if (role === null) {
    return (
      <>
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <NavLink to="/" className="flex items-center">
              <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
              <p className="font-sans self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ecom</p>
            </NavLink>
            <div className="flex md:order-2">
              <button data-target='#tttt' data-collapse-toggle="#tttt" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false" onClick={() => setcollapse(!collapse)}>
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
            </div>
            <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${collapse ? 'hidden' : ''}`} id="tttt">
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <NavLink to="/" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</NavLink>
                </li>
                <li>
                  <NavLink to="/feature" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Feature</NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-indigo-600">405</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Access Denied</h1>
            <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t access this page without login please login first</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <NavLink
                to="/login"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login Now
              </NavLink>
              <NavLink to="/contact" className="text-sm font-semibold text-gray-900">
                Contact support <span aria-hidden="true">&rarr;</span>
              </NavLink>
            </div>
          </div>
        </main>
      </>
    )

  } else {
    return (
      <>
        <PageNotFound />
      </>
    )
  }
}

export default EditUser
