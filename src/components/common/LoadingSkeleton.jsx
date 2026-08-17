import React from 'react'

function Shimmer({ width = '100%', height = '16px', radius = '8px', style = {} }) {
  return (
    <div style={{
      width, height, borderRadius: radius,
      background: 'linear-gradient(90deg, #F3F4F6 25%, #E5E7EB 50%, #F3F4F6 75%)',
      backgroundSize: '200% 100%',
      animation: 'shimmer 1.4s infinite',
      ...style,
    }}>
      <style>{`@keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }`}</style>
    </div>
  )
}

export function RestaurantCardSkeleton() {
  return (
    <div style={{
      background: '#fff', borderRadius: '18px', overflow: 'hidden',
      border: '1px solid #F3F4F6', boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
    }}>
      <Shimmer height="180px" radius="0" />
      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Shimmer width="70%" height="18px" />
        <Shimmer width="50%" height="14px" />
        <Shimmer width="90%" height="12px" />
        <Shimmer height="40px" radius="10px" />
      </div>
    </div>
  )
}

export function DishCardSkeleton() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', minWidth: '110px' }}>
      <Shimmer width="110px" height="110px" radius="50%" />
      <Shimmer width="70px" height="13px" />
      <Shimmer width="50px" height="12px" />
    </div>
  )
}

export function PageSkeleton({ count = 6 }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px', padding: '24px 6vw' }}>
      {Array.from({ length: count }).map((_, i) => <RestaurantCardSkeleton key={i} />)}
    </div>
  )
}

export default Shimmer