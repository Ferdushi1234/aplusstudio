import dynamic from 'next/dynamic'
 
const NoSSR = dynamic(() => import('@/app/components/error'), { ssr: true })
 
export default function Page() {
  return (
    <div>
      <NoSSR />
    </div>
  )
}