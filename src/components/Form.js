import React from 'react'

const Form = () => {
  return (
    <div className='mx-auto uppercase w-2/3 text-white App py-5 px-10 text-lg'>
      <p className='text-6xl my-5 text-fjorange'>   We're Here. Let's Talk.</p>
      <form className='  flex flex-col w-full justify-start text-start text-xl' action="" method="get">

        <div className='flex justify-evenly '>
          <div className='flex flex-col w-full p-2'>
            <label className=' text-fjyellow ' for="fn"> first name</label>
            <input className='my-2 p-2 px-4  text-xl w-full   border-b-4 border-l-2 bg-transparent border-r-2 border-t-2 rounded-full ' type="text" name="" id="fn" />
          </div>


          <div className='flex flex-col w-full p-2'>
            <label className=' text-fjyellow ' for="ln"> last name</label>
            <input className=' my-2 p-2 px-4  text-xl w-full  border-b-4 border-l-2 bg-transparent border-r-2 border-t-2 rounded-full ' type="text" name="" id="fn" />
          </div>


        </div>

        <div className='flex justify-evenly '>
          <div className='flex flex-col w-full p-2  '>
            <label className=' text-fjyellow ' for="fn"> Email</label>
            <input className='  my-2 p-2 px-4  text-xl w-full   border-b-4 border-l-2 bg-transparent border-r-2 border-t-2 rounded-full ' type="text" name="" id="fn" />
          </div>


          <div className='flex flex-col w-full p-2'>
            <label className=' text-fjyellow ' for="ln"> company name</label>
            <input className=' my-2 p-2 px-4  text-xl w-full  border-b-4 border-l-2 bg-transparent border-r-2 border-t-2 rounded-full ' type="text" name="" id="fn" />
          </div>


        </div>

        <div className='flex justify-evenly text-lg'>
          <label className=' text-fjyellow ' for="cars">Number of Locations</label>
          <select className=' h-fit   w-1/6   border-2 bg-transparent  rounded-full  p-2' id="cars" name="cars">
            <option value="1 - 4">1 - 4 </option>
            <option value="5 - 10">5 - 10</option>
            <option value="11-25">11-25</option>
            <option value="26-99">26-99</option>
            <option value="100">100+</option>
          </select>

          <label className=' ml-20 text-fjyellow w-1/6' for="cars">Brand HQ Location</label>
          <select className=' h-fit w-3/6   border-2 bg-transparent  rounded-full  p-2' id="cars" name="cars">
            <option value="">— Please choose an option —</option>
            <option value="AL - Alabama">AL - Alabama</option>
            <option value="AK - Alaska">AK - Alaska</option>
            <option value="AZ - Arizona">AZ - Arizona</option>
            <option value="AR - Arkansas">AR - Arkansas</option>
            <option value="CA - California">CA - California</option>
            <option value="CO - Colorado">CO - Colorado</option>
            <option value="CT - Connecticut">CT - Connecticut</option>
            <option value="DE - Delaware">DE - Delaware</option>
            <option value="FL - Florida">FL - Florida</option>
            <option value="GA - Georgia">GA - Georgia</option>
            <option value="HI - Hawaii">HI - Hawaii</option>
            <option value="ID - Idaho">ID - Idaho</option>
            <option value="IL - Illinois">IL - Illinois</option>
            <option value="IN - Indiana">IN - Indiana</option>
            <option value="IA - Iowa">IA - Iowa</option>
            <option value="KS - Kansas">KS - Kansas</option>
            <option value="KY - Kentucky">KY - Kentucky</option>
            <option value="LA - Louisiana">LA - Louisiana</option>
            <option value="ME - Maine">ME - Maine</option>
            <option value="MD - Maryland">MD - Maryland</option>
            <option value="MA - Massachusetts">MA - Massachusetts</option>
            <option value="MI - Michigan">MI - Michigan</option>
            <option value="MN - Minnesota">MN - Minnesota</option>
            <option value="MS - Mississippi">MS - Mississippi</option>
            <option value="MO - Missouri">MO - Missouri</option>
            <option value="MT - Montana">MT - Montana</option>
            <option value="NE - Nebraska">NE - Nebraska</option>
            <option value="NV - Nevada">NV - Nevada</option>
            <option value="NH - New Hampshire">NH - New Hampshire</option>
            <option value="NJ - New Jersey">NJ - New Jersey</option>
            <option value="NM - New Mexico">NM - New Mexico</option>
            <option value="NY - New York">NY - New York</option>
            <option value="NC - North Carolina">NC - North Carolina</option>
            <option value="ND - North Dakota">ND - North Dakota</option>
            <option value="OH - Ohio">OH - Ohio</option>
            <option value="OK - Oklahoma">OK - Oklahoma</option>
            <option value="OR - Oregon">OR - Oregon</option>
            <option value="PA - Pennsylvania">PA - Pennsylvania</option>
            <option value="RI - Rhode Island">RI - Rhode Island</option>
            <option value="SC - South Carolina">SC - South Carolina</option>
            <option value="SD - South Dakota">SD - South Dakota</option>
            <option value="TN - Tennessee">TN - Tennessee</option>
            <option value="TX - Texas">TX - Texas</option>
            <option value="UT - Utah">UT - Utah</option>
            <option value="VT - Vermont">VT - Vermont</option>
            <option value="VA - Virginia">VA - Virginia</option>
            <option value="WA - Washington">WA - Washington</option>
            <option value="WV - West Virginia">WV - West Virginia</option>
            <option value="WI - Wisconsin">WI - Wisconsin</option>
            <option value="WY - Wyoming">WY - Wyoming</option>
            <option value="International">International</option>
          </select>
        </div>

        <div className='flex mt-4'>
          <label className=' h-fit  text-fjyellow' htmlFor="area">Write a Message</label>
          <input className=' my-2 rounded-lg border-2 bg-transparent border-fjpeach w-full' name="" id="area" rows="3" />
        </div>
        <button className='w-fit my-5 mx-auto text-fjwhite font-bold border-2 px-20 py-4  rounded-lg hover:border-fjorange hover:text-fjorange hover:text-2xl duration-300 ease-out'>SUBMIT</button>

      </form>
    </div>
  )
}

export default Form