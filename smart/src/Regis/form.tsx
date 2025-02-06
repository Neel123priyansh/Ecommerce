import { useMemo, useState } from 'react'
import { BackgroundBeamsWithCollision } from '../Components/Background/collide'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { ToastContainer, toast } from 'react-toastify';
import '@coreui/coreui-pro/dist/css/coreui.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export const Form = () => {  

  const [user, setUser] = useState({
    email: '',
    phone: '',
    address: '',
    select: null,
    name: '',
  });  const handleDateChange = (dateselected: Date | null) => {
    setUser({
      ...user,
      date: dateselected,
    });
  };
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSelectChange = (selectedOption: any) => {
    setUser({
      ...user,
      select: selectedOption.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(user);
    const response = await fetch('http://localhost:6200/Orton/Reg', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...user,
        date: user.date ? user.date.toISOString() : null, // Convert date to ISO string before sending to backend
      }),
    });

    const res_data = await response.json();
    if (response.ok) {
      toast.success("Login Successful", {
        onClose: () => navigate('/Add')
      }
      );
    } else {
      toast.error(res_data.extraDetail ? res_data.extraDetail : res_data.message);
      console.log("Invalid Credentials");
    }

    console.log(response);
  };

  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='relative w-7/12 flex flex-row-reverse rounded-2xl h-5/6 md:w-md lg:w-lg xl:w-xl shadow-2xl'>
        <div className="relative w-1/3 bg-black z-10 overflow-hidde rounded-r-2xl flex flex-col items-center justify-center">
          <BackgroundBeamsWithCollision className='z-10 rounded-r-2xl flex flex-col'>
          <p className="text-white font-bold text-4xl z-1 font-Manrope">Hello, Friend!</p>
          <p className="text-white text-base mt-9 items-center self-center max-w-[205px] font-Manrope w-max z-20">Enter your personal details</p>
          <p className="text-white text-base items-center self-center max-w-[205px] font-Manrope w-max z-20">and start journey with us </p>
          </BackgroundBeamsWithCollision>
        </div>
        <form onSubmit={handleSubmit}  className='bg-white flex flex-col font-Manrope h-full w-2/3 rounded-l-2xl text-center py-10 px-10'>
          <p className='text-5xl font-quicksand font-semibold text-[#000000]'>Register Form</p>
          <input type='name' name='name' value={user.name} onChange={handleChange}  className='mt-14 animation ease-in-out duration-300 hover:border hover:border-black outline-none h-12 pl-5 bg-[#eaeaea]' placeholder='Name' alt='name'/>
          <input type='email' name='email' value={user.email} onChange={handleChange}  className='mt-3 animation ease-in-out duration-300 hover:border hover:border-black outline-none h-12 pl-5 bg-[#eaeaea]' placeholder='Email Address' alt='email'/>
          <input type='phone' name='phone' value={user.phone} onChange={handleChange}  className='mt-3 animation ease-in-out duration-300 hover:border hover:border-black outline-none h-12 pl-5 bg-[#eaeaea]' placeholder='Phone Number' alt='phone number'/>
          {/* <input type='password' name='password' className='mt-3 outline-none pl-5 h-12 bg-[#eaeaea]' placeholder='Location' alt='Location'/> */}
          <Select  value={options.find(option => option.value === user.select)} onChange={handleSelectChange} className='mt-2 animation ease-in-out duration-300 hover:border hover:border-black text-start' options={options}></Select>
          <input type='address' name='address' value={user.address} onChange={handleChange} className='mt-3 animation ease-in-out duration-300 hover:border hover:border-black outline-none pl-5 h-12 bg-[#eaeaea]' placeholder='Address' alt='Location'/>
          <button className='mt-10 font-Manrope rounded-3xl w-3/6 h-10 font-[500] text-white bg-[#00df9a] mx-auto'>SIGN UP</button>
        </form>
      </div>
    </div>
  )
}
