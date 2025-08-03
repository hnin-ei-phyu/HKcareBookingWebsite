import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "edwardvincent@gmail.com",
    phone: '+66 617736759',
    address: {
      line1: 'Srinakarin Road, Asakan Place',
      line2: 'Suan Luang Subdistrict, Suan Luang District, Bangkok'
    },
    gender: 'Male',
    dob: '2000-02-01'
  })

  const [isEdit, setIsEdit] = useState(false)
  const [preview, setPreview] = useState(null)
  const [imageFile, setImagefile] = useState(null)
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'addressLine1' || name === 'addressLine2') {
      setUserData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [name === 'addressLine1' ? 'line1' : 'line2']: value
        }
      }))
    } else {
      setUserData((prev) => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImagefile(file)
      setPreview(URL.createObjectURL(file))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Info:', userData);

    //example of sending image via FormData to API
    const form = new FormData();
    form.append('name', userData.name)
    form.append('phone', userData.phone)
    form.append('addressLine1', userData.address.line1)
    form.append('addressLine2', userData.address.line2)
    form.append('gender', userData.gender)
    form.append('dob', userData.dob)
    if(imageFile) form.append('image', imageFile)
    
    //Update image preview in user data
    if (preview) {
      setUserData((prev) => ({
        ...prev, image: preview   // Update image shown on the profile
      }))
    }

    console.log('Updated info:', userData);
    
    
    setIsEdit(false);
  }

  return (
    <div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <div>
           <img className='w-36 rounded' src={userData.image} alt="" />
          
        </div>         
        <div className='flex flex-col items-start gap-6 md:w2/4 text-sm text-gray-600'>
          <p className='text-3xl text-neutral-800 font-medium mt-4'>{userData.name}</p> 
        </div>
      </div>


      <hr className='bg-zinc-400 h-[1px] border-none' />
      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email id:</p>
          <p className='text-blue-500'>{userData.email}</p>
          <p className='font-medium'>Phone:</p>
          <p className='text-blue-400'>{userData.phone}</p>
          <p className='font-medium'>Address:</p>
          <p className='text-gray-500'>
            {userData.address.line1}
            <br />
            {userData.address.line2}
          </p>
        </div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Gender:</p>
          <p className='text-gray-500'> {userData.gender}</p>
          <p className='font-medium'>Birthday:</p>
          <p className='text-gray-500'> {userData.dob}</p>
        </div>
      </div>

      

      <div>
        <button onClick={() => setIsEdit(true)} className='border-primary border px-5 py-1 text-md rounded mt-10 overflow-hidden cursor-pointer hover:bg-primary hover:text-white transition-all'>Edit</button>
        {
          isEdit && (
            <div className='fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-50 h-screen overflow-y-auto touch-auto'>
              <div className='bg-white p-6 rounded-xl shadow-lg w-full max-w-md border border-gray-300'>
                <h2 className='text-xl font-semibold mb-4'>Update User Info</h2>
                <form onSubmit={handleSubmit} className='space-y-4' action="">

                  {/* Image Upload section */}
                  <div>
                    <img
                      src={preview || userData.image}
                      alt="Preview"
                      className='w-28 h-28 rounded-full object-cover border mb-2' />
                    <input type="file" accept='image/*' onChange={handleImageChange} className='text-sm' />
                  </div>

                  <div>
                    <label className="block text-sm font-medium">Name</label>
                    <input type="text"
                      name='name'
                      value={userData.name}
                      onChange={handleChange}
                      className='mt-1 w-full border border-gray-300 rounded-md p-2'
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Phone</label>
                    <input 
                      name='phone'
                      value={userData.phone}
                      onChange={handleChange}
                      className='mt-1 w-full border border-gray-300 rounded-md p-2'
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Address</label>
                    <input
                      type="text"
                      name='addressLine1'
                      value={userData.address.line1}
                      onChange={handleChange}
                      className='mt-1 w-full border border-gray-300 rounded-md p-2'
                    />
                    <input
                      type="text"
                      name='addressLine2'
                      value={userData.address.line2}
                      onChange={handleChange}
                      className='mt-1 w-full border border-gray-300 rounded-md p-2'
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Gender </label>
                    <select name="gender" value={userData.gender} onChange={handleChange} className='mt-1 w-full border border-gray-300 rounded-md p-2'>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Birthday</label>
                    <input type="date"
                      name='dob'
                      value={userData.dob}
                      onChange={handleChange}
                      className='mt-1 w-full border border-gray-300 rounded-md p-2'
                    />
                  </div>

                  <div className='flex justify-end space-x-2'>
                    <button
                      type='button'
                      onClick={() => setIsEdit(false)}
                      className='px-4 py-2 bg-gray-300 rounded-md'>
                        Cancel
                    </button>
                    <button
                      type='submit'
                      className='px-4 py-2 bg-primary text-white rounded-md'>
                      Save
                    </button>
                  </div>

                </form>
              </div>
            </div>
          )
        }
      </div>

    </div>
  )
}

export default MyProfile

