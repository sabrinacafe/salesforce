import React from 'react';
import Hero from '@/app/components/Hero/Hero';
import CRM from '@/app/components/CRM/Crm';
import Caracteristics from '@/app/components/CaracteristcsCrm/CaracteristicsCrm';
import Features from '@/app/components/Trailhead/Trailhead';
import Company from '@/app/components/Custumers/Custumers';


const Home = () => {
  return (
    <div>
      <Hero/>
      <CRM/>
      <Caracteristics/>
      <Features/>
      <Company/>
    </div>
  )
}

export default Home;