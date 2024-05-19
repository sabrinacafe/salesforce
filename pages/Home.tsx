import React from 'react';
import Hero from '@/app/components/Hero/Hero';
import CRM from '@/app/components/CRM/Crm';
import Caracteristics from '@/app/components/CaracteristcsCrm/CaracteristicsCrm';
import Trailhead from '@/app/components/Trailhead/Trailhead';
import Custumers from '@/app/components/Custumers/Custumers';


const Home = () => {
  return (
    <div>
      <Hero/>
      <CRM/>
      <Caracteristics/>
      <Trailhead/>
      <Custumers/>
    </div>
  )
}

export default Home;