import React from 'react'
import { card1, card2, card3 } from '../Assets/Assets'
const Solutions = () => {
  return (
    <div className=' bg-[#000000] w-screen App py-10'>
      <p className=' text-fjwhite text-6xl mb-16'>
        eCommerce Solution Bundles
      </p>


      {/* cards deck */}
      <div className='flex'>

        {/* card1 */}
        <div className='flex flex-col  items-center  mx-7 p-5 rounded-3xl max-h-fit border-fjblue border-8'>
          <p className='text-3xl text-fjorange font-bold uppercase'>Host Kitchen® Network</p>
          <img src={card1} alt="card1" className='my-10' />
          <p className='text-2xl mb-10  text-fjorange font-bold '>Attract and retain profitable guests via your own channels</p>

          <ul className=' text-fjwhite list-disc text-left'>

            <li>Custom storefront and app</li>
            <li>Digital marketing</li>
            <li> Integrated loyalty</li>
            <li> Cross-brand ordering </li>
            <li>Dynamic segmentation</li>
          </ul>
          <button className=' mt-5 border-2 border-fjyellow text-fjblue text-xl py-2 px-4 font-bold rounded-xl'>Book A Consultation</button>

        </div>


        {/* card2 */}
        <div className='flex flex-col  items-center  mx-7 p-5 rounded-3xl max-h-fit border-fjblue border-8'>
          <p className='text-3xl text-fjorange font-bold uppercase'>Intelligent First Party</p>
          <img src={card2} alt="card1" className='my-10 ' />
          <p className='text-2xl mb-10  text-fjorange font-bold '>          Add additional brands to your operations for more profits
          </p>
          <ul className=' text-fjwhite list-disc text-left'>
            <li>Storefront administration</li>
            <li> Order aggregation</li>
            <li> Campaign management</li>
            <li>  Disputes & reconciliation </li>
            <li>Contract negotiation</li>
          </ul>
          <button className=' mt-5 border-2 border-fjyellow text-fjblue text-xl py-2 px-4 font-bold rounded-xl'>Book A Consultation</button>
        </div>


        {/* card3 */}
        <div className='flex flex-col  items-center  mx-7 p-5 rounded-3xl max-h-fit border-fjblue border-8'>
          <p className='text-3xl text-fjorange font-bold uppercase'>3rd Party Governance</p>
          <img src={card3} alt="card1" className='my-10' />
          <p className='text-xl mb-10  text-fjorange font-bold '>Win back time, money, and customers through expert stewardship</p>

          <ul className=' text-fjwhite list-disc text-left'>

            <li>Cloud Concept℠ partner brands</li>
            <li>Bring-Your-Own brands</li>
            <li> Supply chain support</li>
            <li>  Training and QA </li>
            <li> Automated reconciliations</li>
          </ul>
          <button className=' mt-5 border-2 border-fjyellow text-fjblue text-xl py-2 px-4 font-bold rounded-xl'>Book A Consultation</button>

        </div>




      </div>
    </div>
  )
}

export default Solutions