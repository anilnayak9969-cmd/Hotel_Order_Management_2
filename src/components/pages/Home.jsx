import React from 'react'
import HeroSection            from './HeroSection'
import OffersSection          from './OffersSection'
import WhatOnMindSection      from './WhatOnMindSection'
import TopRestaurantsSection  from './TopRestaurantsSection'
import TopDealsSection        from './TopDealsSection'
import CuisineExplorer        from './CuisineExplorer'
import FeaturedSection        from './FeaturedSection'
import CategorySection        from './CategorySection'
import RecentlyViewedSection  from './RecentlyViewedSection'
import HowItWorks             from './HowItWorks'
import TestimonialsSection    from './TestimonialsSection'
import AppBannerSection       from './AppBannerSection'

function Home() {
  return (
    <div style={{ background: '#fff', minHeight: '100vh', fontFamily: "'Sora', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap'); * { box-sizing: border-box; }`}</style>
      <HeroSection />
      <OffersSection />
      <WhatOnMindSection />
      <TopRestaurantsSection />
      <TopDealsSection />
      <CuisineExplorer />
      <FeaturedSection />
      <CategorySection />
      <RecentlyViewedSection />
      <HowItWorks />
      <TestimonialsSection />
      <AppBannerSection />
    </div>
  )
}
export default Home