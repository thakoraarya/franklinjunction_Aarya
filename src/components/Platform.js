import React from 'react'
import { p1, p2, p3, p4, p5, p6, p7, p8 } from "../Assets/Assets";


const Platform = () => {
  return (
    <div class="grid grid-rows-3 grid-flow-col gap-4 px-6 py-10">
      {/* head */}
      <div className='flex flex-col justify-evenly text-center'>
        <p className='text-4xl text-fjwhite '>
          Dig Into Digital: <br /> Our Unified Platform
        </p>
        <p className=' px-4 text-fjwhite text-md text-justify  tracking-widest '>Harness the power of ML and AI for improved service, greater profits and more efficient operations.</p>
      </div>
      {/* cards */}
      <div className='flex flex-row text-fjwhite  bg-fjorange rounded-xl  '>
        <img className='  h-20 w-20 p-4   justify-between' src={p1} />
        <div className='w-fit p-4'>
           <p className=' flex '>Host Kitchen® Matching</p>
          <br />
           <p className=' flex '>Patented algorithm that creates the ideal match of a host to a Cloud Concept®.</p>
        </div>
      </div>

      {/* cards */}
      <div className='flex flex-row text-fjwhite  bg-fjorange rounded-xl '>
        <img className='  h-20 w-20 p-4   justify-between' src={p2} />
        <div className='w-fit p-4'>
           <p className=' flex '>Digital Marketing</p>
          <br />
           <p className=' flex '>Increased awareness, purchase, and loyalty through tailored marketing.</p>
        </div>
      </div>

       {/* cards */}
       <div className=' flex flex-row text-fjwhite  bg-fjorange rounded-xl'>
          <img className='  h-20 w-20 p-4   justify-between' src={p3} />
          <div className='w-fit p-4'>
             <p className=' flex '>Aggregation and Integration</p>
            <br />
             <p className=' flex '>Unified view of multiple channel activity.</p>
          </div>
        </div>
        {/* cards */}
        <div className='flex flex-row text-fjwhite  bg-fjorange rounded-xl'>
          <img className='  h-20 w-20 p-4   justify-between' src={p4} />
          <div className='w-fit p-4'>
             <p className=' flex '>Full-Service Administration</p>
            <br />
            <p className=' flex '>Governance of third-party marketplaces including storefront management, contract negotiation, revenue reconciliation, and dispute resolution.</p>
          </div>
        </div>

        {/* cards */}
        <div className='flex flex-row text-fjwhite  bg-fjorange rounded-xl'>
          <img className='  h-20 w-20 p-4   justify-between' src={p5} />
          <div className='w-fit p-4'>
             <p className=' flex '>Ordering + Payment</p>
            <br />
             <p className=' flex '>Branded online ordering sites, virtual food halls, and apps featuring frictionless payments.</p>
          </div>
        </div>

         {/* cards */}
         <div className='text-fjwhite  bg-fjorange rounded-xl flex flex-row'>
          <img className='  h-20 w-20 p-4   justify-between' src={p6} />
          <div className='w-fit p-4'>
             <p className=' flex '>Menu Mix Optimization</p>
            <br />
             <p className=' flex '>A/B testing, competitive landscape analysis, customer feedback loops, and more.</p>
          </div>
        </div>
        {/* cards */}
        <div className='text-fjwhite  bg-fjorange rounded-xl  flex flex-row'>
          <img className='  h-20 w-20 p-4   justify-between' src={p7} />
          <div className='w-fit p-4'>
             <p className=' flex '>Dynamic Segmentation</p>
            <br />
             <p className=' flex '>Responsive consumer journeys and communications based in behavior, demographics, and external data.</p>
          </div>
        </div>

        {/* cards */}
        <div className='text-fjwhite  bg-fjorange rounded-xl flex flex-row '>
          <img className='  h-20 w-20 p-4   justify-between' src={p8} />
          <div className='w-fit p-4'>
             <p className=' flex '>Loyalty and CRM</p>
            <br />
             <p className=' flex '>Heightened engagement and frequency from guest segmentation, automated messaging, and gamified loyalty schemes.</p>
          </div>
        </div>

    </div>
  )

}

export default Platform