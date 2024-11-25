'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavLink({ children, ...props }) {
  const pathName = usePathname()
  console.log(pathName)
  return (
    <Link {...props} className={` `}>
      {children}
    </Link>
  )
}

export default NavLink